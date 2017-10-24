
### Running The Application
To run the application please do the following


1. Clone the repo
2. In your terminal change directory to the app folder
3. "npm install"
4. "npm run build" will run the app with webpack dev server
The app will run on http://localhost:8080/

### Application Structure
The app is been built as React/Redux.

To handle the prediction calculations I used a "web worker" architecture where all
the code that handle prediction calculation is separated in "worker.js" file and
loaded in the application as worker to enhance the app performance, the assumption
here that this kind of calculations will require a lot of data processing with this way the
fornt-end app performance will not be affected as the worker will be launched in
separate thread.

#### Challenge
[a link to challenge]https://gist.github.com/sgwilym/fe3218f9555a3bef6d07d823a36755c1

### Important Notes
I wish I have more time to do all the test requirements. I hope this will give good
idea about me.

### Thank you
