import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as StackTrace from 'stacktrace-js';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error) {

    const message = error.message ? error.message : error.toString();
    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';

    let stackString = '';
    // get the stack trace, lets grab the last 10 stacks only
    StackTrace.fromError(error).then(stackFrames => {
      stackString = stackFrames
      .splice(0, 20)
      .map(function (sf) {
        return sf.toString();
      }).join('\n');
    });


     console.log({message, url, stack: stackString });

     let messageForUser = 'Message: ' + message;

     if (url) {
       messageForUser = messageForUser + '\nURL: ' + url;
     }

     if (stackString) {
       messageForUser = messageForUser + '\nStack trace: ' + stackString;
     }
     this.toastrService.error(messageForUser, 'Error', { timeOut: 3000, progressBar: true });

    //  // IMPORTANT: Rethrow the error otherwise it gets swallowed
     throw error;
  }

    // Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
    private get toastrService(): ToastrService {
      return this.injector.get(ToastrService);
    }

}
