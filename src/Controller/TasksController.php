<?php

namespace App\Controller;

use App\Entity\Task;
use App\Form\TaskType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TasksController extends AbstractController
{
    #[Route('/tasks', name: 'app_task_list')]
    public function index(Request $request, EntityManagerInterface $em): Response
    {
        $status = $request->query->get('status');

        $qb = $em->getRepository(Task::class)->createQueryBuilder('t');

        if ($status) {
            $qb->andWhere('t.status = :status')
            ->setParameter('status', $status);
        }

        $tasks = $qb->getQuery()->getResult();

        return $this->render('tasks/index.html.twig', [
            'tasks' => $tasks
        ]);
    }
    #[Route('/tasks/new', name: 'app_task_new')]
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $task = new Task();

        $form = $this->createForm(TaskType::class, $task);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($task);
            $em->flush();

            return $this->redirectToRoute('app_task_list');
        }

        return $this->render('tasks/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
    #[Route('/tasks/edit/{id}', name: 'app_task_edit')]
    public function edit(Task $task, Request $request, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(TaskType::class, $task);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->flush();
            return $this->redirectToRoute('app_task_list');
        }

        return $this->render('tasks/edit.html.twig', [
            'form' => $form->createView(),
            'task' => $task,
        ]);
    }
}