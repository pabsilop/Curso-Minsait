import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css'],
})
export class ReproductorComponent implements OnInit {
  @ViewChild('video') videoElement!: ElementRef;
  currentVolume: number = 0;
  currentTime: number = 0;
  duration: number = 0;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.videoElement);
    this.videoElement.nativeElement.volume = this.currentVolume / 100;
    this.videoElement.nativeElement.play();
  }

  play(video: HTMLVideoElement): void {
    console.dir(video);
    video.play();
  }

  pause(video: HTMLVideoElement): void {
    video.pause();
  }

  cambiarVolumen(video: HTMLVideoElement, event: any): void {
    const volumenInput = event.target.value;
    this.currentVolume = volumenInput;
    video.volume = volumenInput / 100;
  }

  fullScreen(video: HTMLVideoElement): void {
    video.requestFullscreen();
  }

  replay(video: HTMLVideoElement): void {
    video.currentTime = 0;
  }

  subirVolumen(): void {
    if (this.currentVolume + 10 <= 100) {
      this.videoElement.nativeElement.volume += 0.1;
      this.currentVolume += 10;
    }
  }

  bajarVolumen(): void {
    if (this.currentVolume - 10 > 0) {
      this.videoElement.nativeElement.volume -= 0.1;
      this.currentVolume -= 10;
    }
  }

  setDuration() {
    this.duration = this.videoElement.nativeElement.duration;
    console.log(this.duration);
  }

  actualizarProgreso(event: any): void {
    console.log(event);
    this.currentTime = event.target.currentTime;
  }
}
