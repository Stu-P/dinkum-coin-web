def buildVersion = ''

pipeline {
	agent {         
        docker {
            image 'node:7-alpine'
            args '-p 3000:3000'
        } 
    }

	options { skipDefaultCheckout() }
	

        environment { 
			CI='TRUE'
			HOME='.'
			
		}

	stages {
		stage("Build") {
			 
			steps {

				sh 'npm install'

    		}
		}
	stage("Test") {

			steps {
				sh 'npm test'
			}
		}
	stage("Package") {



			steps {
				sh 'npm run build'
	
			}
		}
	}
}
