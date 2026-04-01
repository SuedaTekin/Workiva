<?php

namespace App\Controller;

use App\Entity\Task;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReportsController extends AbstractController
{
    #[Route('/reports', name: 'app_reports')]
    public function index(EntityManagerInterface $em): Response
    {
        $tasks = $em->getRepository(Task::class)->findAll();

        $stats = [
            'Completed' => 0,
            'Pending' => 0,
            'In Progress' => 0
        ];

        foreach ($tasks as $task) {
            $status = $task->getStatus();
            if (array_key_exists($status, $stats)) {
                $stats[$status]++;
            }
        }

        return $this->render('reports/index.html.twig', [
            'stats' => $stats,
        ]);
    }
}