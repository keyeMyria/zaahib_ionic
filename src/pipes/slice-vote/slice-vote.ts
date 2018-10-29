import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sliceVote',
})
export class SliceVotePipe implements PipeTransform {
 
  transform(value: string, args:string) {
    let votes:Array<string>=value.split(":")
    if(args==='likes')
    return votes[0];
    else
    return votes[1];
  }
}
