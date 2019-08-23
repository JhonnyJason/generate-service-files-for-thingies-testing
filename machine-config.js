var baseConfig = require("./base-config")

var allMachineThingies = [
    {
        homeUser: "citysearch-socket",
        repository: "citysearch-on-socket",
        type:"service",
        socket: true
    },
    {
        homeUser: "webhook-handler",
        repository: "webhook-handler-repository",
        type:"service",
        socket: true,
        oneshot: true,
    },
    {
        homeUser: "citysearch",
        repository: "citysearch-repository",
        type:"service",
        port: "3002"
    }

    // {
    //     homeUser: "citysearch-socket",
    //     repository: "citysearch-on-socket-deploy",
    //     branch: "release",
    //     type:"service",
    //     socket: true,
    //     port: 65531,
    //     updateCode: [
    //         "sudo -u citysearch-socket -H sh -c 'cd /home/citysearch-socket/citysearch-on-socket-deploy; git pull origin release'"
    //     ]
    // },
    // {
    //     homeUser: "program-editor-tester",
    //     repository: "program-editor-tester",
    //     branch: "release",
    //     type:"service",
    //     socket: true,
    //     dnsNames: ["program-tester.auroxtech.com", "program-tester.aurox.at"],
    //     updateCode: [
    //         "sudo -u program-editor-tester -H sh -c 'cd /home/program-editor-tester/program-editor-tester; git pull origin release'",
    //         "systemctl restart program-editor-tester.service"
    //     ]
    // },
    // {
    //     homeUser: "weblenny-homepage",
    //     repository: "constructionpage",
    //     branch: "master",
    //     type:"website",
    //     dnsNames: ["www.weblenny.at", "weblenny.at"],
    //     updateCode: [
    //         "sudo -u weblenny-homepage -H sh -c 'cd /home/weblenny-homepage/constructionpage; git pull origin master'"
    //     ]    
    // },
    // {
    //     homeUser: "citysearch",
    //     repository: "aurox-citysearch-deploy",
    //     branch: "release",
    //     type:"service",
    //     port: "3002",
    //     dnsNames: ["weather.auroxtech.com", "weather.aurox.at"],
    //     updateCode: [
    //         "sudo -u citysearch -H sh -c 'cd /home/citysearch/aurox-citysearch-deploy; git pull origin master'",
    //         "systemctl restart citysearch.service"
    //     ]    
    // }

]
baseConfig.thingies = baseConfig.thingies.concat(allMachineThingies)
module.exports = baseConfig;
