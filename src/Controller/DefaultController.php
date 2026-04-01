<?php

namespace App\Controller;

use App\Repository\PhonenumberRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/admin', name: 'default_index')]
    public function index(): Response
    {

        return $this->render('default/index.html.twig', [
            'name' => 'name'
        ]);
    }
}