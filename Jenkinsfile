def buildVersion = ''

pipeline {
	agent {         
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        } 
    }

	options { skipDefaultCheckout() }
	

        environment { 
			CI='TRUE'
		}

	stages {
		stage("Build") {
			 
			steps {

				sh 'sudo npm install'

    		}
		}
	stage("Test") {

			steps {
				sh 'sudo npm test'
			}
		}
	stage("Package") {



			steps {
				sh 'sudo npm run build'
	
			}
		}
	}
}
