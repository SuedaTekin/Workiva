<?php

namespace App\Controller;

use App\Form\ProjectType;
use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProjectsController extends AbstractController
{
    #[Route('/projects', name: 'app_project_list')]
    public function index(Request $request, EntityManagerInterface $em): Response
    {
        $search = $request->query->get('search');
        $status = $request->query->get('status');

        $qb = $em->getRepository(Project::class)->createQueryBuilder('p');

        if ($search) {
            $qb->andWhere('p.name LIKE :search')
            ->setParameter('search', '%'.$search.'%');
        }

        if ($status) {
            $qb->andWhere('p.status = :status')
            ->setParameter('status', $status);
        }

        $projects = $qb->getQuery()->getResult();

        return $this->render('projects/index.html.twig', [
            'projects' => $projects
        ]);
    }

    #[Route('/projects/new', name: 'app_project_new')]
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        if ($request->isMethod('POST')) {
            $project = new Project();
            $project->setName($request->request->get('name'));
            $project->setResponsible($request->request->get('responsible'));
            $project->setProgress((int)($request->request->get('progress') ?? 0));
            $project->setStatus($request->request->get('status') ?? 'Pending');
            $project->setCreatedAt(new \DateTime());

            $em->persist($project);
            $em->flush();

            return $this->redirectToRoute('app_project_list');
        }

        return $this->render('projects/new.html.twig');
    }

   #[Route('/projects/{id}/edit', name: 'app_project_edit')]
    public function edit(
    Request $request,
    Project $project,
    EntityManagerInterface $em
    ): Response {

    $form = $this->createForm(ProjectType::class, $project);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {

        $em->flush();

        return $this->redirectToRoute('app_project_list');
    }

    return $this->render('projects/edit.html.twig', [
        'form' => $form->createView(),
        'project' => $project
    ]);
    }
}