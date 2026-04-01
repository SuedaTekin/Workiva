<?php

namespace App\Controller;

use App\Repository\PhonenumberRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PhoneNumberController extends AbstractController
{
    #[Route('/phone', name: 'phone_index')]
    public function index(PhonenumberRepository $repo): Response
    {
        $phones = $repo->findAll();

        return $this->render('phone_number/index.html.twig', [
            'phones' => $phones,
        ]);
    }
}