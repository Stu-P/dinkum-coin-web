def buildVersion = ''

pipeline {
	agent { label 'nodejs' }

	options { skipDefaultCheckout() }
	

        environment { 
			CI=TRUE
		}

	stages {
		stage("Package Restore") {
			 
			steps {
				deleteDir()
				checkout scm

				sh 'npm install'

				stash name: "solution", useDefaultExcludes: false
			}
		}
	stage("Test") {

			steps {
				deleteDir()
				unstash "solution"

				sh 'npm test'
			}
		}
	stage("Package") {



			steps {
				deleteDir()
				unstash "solution"
				sh 'npm run build'
	
			}
		}

}
