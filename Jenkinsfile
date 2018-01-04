def buildVersion = ''

pipeline {
	agent {         
        docker {
            image 'node:7-alpine'
            args '-p 3000:3000 -u "root"'
        } 
    }

	options { skipDefaultCheckout() }
	

        environment { 
			CI='TRUE'
			HOME='/home/jenkins'
			
		}

	stages {
		stage("Build") {
			 
			steps {
				sh 'pwd'
				sh 'ls -al'
				sh 'printenv'
				sh 'node --version'
				sh 'npm install'

    		}
		}
	stage("Test") {

			steps {
				//sh 'npm test'
				echo 'Test'
			}
		}
	stage("Package") {



			steps {
				//sh 'npm run build'
				echo 'Package'
			}
		}
	}
}
