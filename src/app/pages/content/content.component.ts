import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCyXga0LgtUES34EepPai9hU5iGpcQdHy7Q&usqp=CAU"
  contentTitle:string = "HOMEM DE FERRO MORRE EM BATALHA CONTRA THANOS"
  contentDescription: string = "Novo homem de ferro será lançado em 2025, com a filha sendo a protagonista"
  private id:string | null = '0'
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    );

    this.setValuesComponent(this.id)
  }

  setValuesComponent(id:string | null) {
    const result = dataFake.filter(
                    article => article.id.toString() === id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
