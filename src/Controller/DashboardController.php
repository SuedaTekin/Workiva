<?php

namespace App\Controller;

use App\Repository\TaskRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class DashboardController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dashboard')]
    #[IsGranted('ROLE_USER')] 
    public function index(TaskRepository $taskRepository): Response
    {
        $user = $this->getUser();

        // Toplam task
        $totalTasks = $taskRepository->count([]);

        // Tamamlanan task
        $completedTasks = $taskRepository->count([
            'status' => 'completed'
        ]);

        // Deadline yaklaşan
        $upcomingTasks = $taskRepository->createQueryBuilder('t')
            ->where('t.deadline <= :date')
            ->andWhere('t.deadline >= :today')
            ->andWhere('t.status != :status')
            ->setParameter('date', new \DateTime('+3 days'))
            ->setParameter('today', new \DateTime())
            ->setParameter('status', 'completed')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();

        // Geciken tasklar
        $overdueTasks = $taskRepository->createQueryBuilder('t')
            ->where('t.deadline < :today')
            ->andWhere('t.status != :status')
            ->setParameter('today', new \DateTime())
            ->setParameter('status', 'completed')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();

        return $this->render('dashboard/index.html.twig', [
            'user' => $user,
            'totalTasks' => $totalTasks,
            'completedTasks' => $completedTasks,
            'upcomingTasks' => $upcomingTasks,
            'overdueTasks' => $overdueTasks
        ]);
    }
}
