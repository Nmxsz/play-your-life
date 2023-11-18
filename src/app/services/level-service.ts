import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private experience = 0;
  private level = 1;

  private experienceForNextLevel = 100;

  addExperience(points: number): void {
    this.experience += points;
    this.checkLevelUp();
  }

  private checkLevelUp(): void {
    while (this.experience >= this.experienceForNextLevel) {
      this.experience -= this.experienceForNextLevel;
      this.level++;
      this.updateExperienceForNextLevel();
      // Hier könntest du ein Event auslösen, um andere Teile der Anwendung über das Level-Up zu informieren
    }
  }

  private updateExperienceForNextLevel(): void {
    // Eine einfache Formel für die benötigte XP für das nächste Level. Dies kann angepasst werden.
    this.experienceForNextLevel = this.level * 100;
  }

  getLevel(): number {
    return this.level;
  }

  getExperience(): number {
    return this.experience;
  }

  getExperienceForNextLevel(): number {
    return this.experienceForNextLevel;
  }
}
