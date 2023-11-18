import {Component, Input, OnInit} from '@angular/core';
import {LevelService} from '../services/level-service';

@Component({
  selector: 'app-levelbar',
  templateUrl: './levelbar.component.html',
  styleUrls: ['./levelbar.component.css']
})
export class LevelbarComponent implements OnInit {
  @Input() progress: number = 0;
  @Input() level: number = 0;
  @Input() userExp: number = 0;
  @Input() userExpNextLevel: number = 0;

  constructor(private levelService: LevelService,) { }

  ngOnInit(): void {
    this.level = this.levelService.getLevel();
  }

}
