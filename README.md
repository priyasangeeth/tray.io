# tray.io

Automation has done for the following actions:
1. Login to Tray.io
2. Create a new Workflow
3. Go back to Dashboard
4. Delete the previously created Workflow
5. Log out of Tray.io

To run the files following actions has to be taken care:

Prerequisites:
1.node.js has to be installed. Can get the executable file from https://nodejs.org/en/download/
2.protractor has to be installed. If not installed, Open command prompt and type  "npm install –g protractor" and hit Enter.
Check the installation and version using "Protractor --version."
3.Chrome browser

To execute the code:
1. start webriver-manager by running this command in command prompt.
"webdriver-manager start"
2. Download the "conf" and "test" file in your local system.
3. Open the node.js command prompt, naviagte to the directory where the files are copied. 
say for ex: cd C:\Users\Sangeeth\Desktop\DemoTest
4. Now run the command "protractor conf.js" from the command prompt.
Browser will be initialised and the script gets executed
