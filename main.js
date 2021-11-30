const core = require('@actions/core')
const github = require('@actions/github')
const { exec } = require('child_process')

try {
    const inputs = {}

    inputs.domain = core.getInput('domain')
    inputs.path = core.getInput('path')
    inputs.token = core.getInput('token')

    core.setOutput("inputs", inputs)

    exec("npm i --global surge")

    exec(`surge ${inputs.path} ${inputs.domain}, --token ${inputs.token}`)

} catch (error) {
    core.setFailed(error.message)
}