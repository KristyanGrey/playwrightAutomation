pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'  // Must match your Jenkins NodeJS tool name
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-creds',
                    url: 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Test') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
