import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatchService} from '../core/services/match';
@Component({
  selector: 'app-edit-match',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-match.ts.html',
  styleUrl: './edit-match.ts.scss'
})
export class EditMatchTs implements OnInit {
  id!: number;
  title ='';
  date ='';
  location ='';
  errorMessage ='';
  successMessage ='';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchService: MatchService
  ){}

  ngOnInit(){
    this.id =Number(this.route.snapshot.paramMap.get('id'));

    this.matchService.getById(this.id).subscribe({
      next: (data) =>{
        this.title = data.title;
        this.date = data.date;
        this.location = data.location;
      },
      error: (err) =>{
        this.errorMessage = 'Erro ao carregar a partida';
        console.error(err);
      }
    });
  }
  onSubmit(){
    const data ={
      title: this.title,
      date: this.date,
      location: this.location
    };
    this.matchService.update(this.id, data).subscribe({
      next: ()=>{
        this.successMessage ='Partida atualizada com sucesso!';
        this.router.navigate(['/matches']);
      },
      error: (err) =>{
        this.errorMessage = 'Erro ao atualizar a partida.'
        console.error(err);
      }
    });
  }
}
