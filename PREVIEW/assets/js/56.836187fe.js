(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{235:function(e,t,n){"use strict";n.r(t);var a=n(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"kubernetes-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes overview")]),e._v(" "),n("h2",{attrs:{id:"containers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Containers")]),e._v(" "),n("p",[e._v("Containers are often viewed as lightweight virtual machines (VMs). While a VM has its own complete operating system\nsitting on top of a hypervisor, containers are sandboxes running directly on top of the host system’s kernel and, as a\nresult, are faster and less resource intensive.")]),e._v(" "),n("p",[e._v('Developers initially adopted containers as a means to package up their code, along with all of its dependencies and\nconfiguration details, to run it anywhere - public, private or hybrid cloud. By simplifying the development environment,\ncontainer technology allowed developers to run multiple versions of their own applications and 3rd party software on a\nsingle workstation without annoying conflicts. As a result, containers became a common, standardized building block for\nsoftware development and led to the demise of the "it works on my machine" scenario.')]),e._v(" "),n("p",[e._v('Containers have been around for a long time in the Linux world, but Docker popularized them by making them easy and\nefficient to use and by providing a public registry of standardized container images for 3rd party software. In the past,\ncontainer technology had been perceived to be prone to security vulnerabilities, in particular to "breakout" where\nmalicious code could escape the sandbox and access sensitive information on the host. Over the years, extensive work has\nbeen done to reduce the attack surface and to limit the blast-radius should any attack succeed. As a result, running\napplications on containers can now significantly reduce the impact of any attack due to the underlying protections\nprovided.')]),e._v(" "),n("p",[e._v("Containers also facilitated the adoption of microservices architectures where, instead of developing single monolithic\nprograms, applications are split up into a set of independent services that communicate with each other via well-defined\ninterfaces (APIs). As a result, the container has now become the standardized unit for software development for packaging,\ncomposition, deployment, scaling and re-use. However, to deploy and maintain a reliable distributed system using all\nthese containers, another layer of management software is required and that is role of the container orchestrator.")]),e._v(" "),n("h2",{attrs:{id:"container-orchestration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#container-orchestration","aria-hidden":"true"}},[e._v("#")]),e._v(" Container orchestration")]),e._v(" "),n("p",[e._v("A container orchestrator is a piece of software that attempts to automate the operations that would traditionally be performed by a system administrator. This includes:")]),e._v(" "),n("ul",[n("li",[e._v("Scaling applications up and down, depending on demand")]),e._v(" "),n("li",[e._v("Load balancing across containers")]),e._v(" "),n("li",[e._v("Restarting individual containers that fail")]),e._v(" "),n("li",[e._v("Replacing and rescheduling containers when an underlying host node dies")]),e._v(" "),n("li",[e._v("Managing compute, memory, network and storage resources")]),e._v(" "),n("li",[e._v("Optimizing resource utilization")]),e._v(" "),n("li",[e._v("Automating the roll-out and rollback of deployments")]),e._v(" "),n("li",[e._v("Allowing services to discover other services in the system")]),e._v(" "),n("li",[e._v("Monitoring and centralized logging")])]),e._v(" "),n("p",[e._v("The use of an orchestrator typically results in increased container density, leading to improved overall utilization of resources. In addition, the average lifetime of a container also decreases significantly as the orchestrator restarts, removes or relocates containers when auto-scaling or when node failure occurs.")]),e._v(" "),n("h2",{attrs:{id:"kubernetes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes")]),e._v(" "),n("p",[e._v("Kubernetes is an open-source container orchestrator project, founded by Google in 2014 and based on the internal\ndistributed systems that support some of Google's most popular applications.")]),e._v(" "),n("p",[e._v("A number of proprietary container orchestration systems have been available, including Docker Swarm and Mesosphere DC/OS.\nHowever, the DevOps community rapidly converged to make Kubernetes the de-facto standard and most commercial offerings\nhave now pivoted to include Kubernetes as part of their offerings. It should be noted that Kubernetes also underpins\nofferings from all the main cloud providers such as Amazon's Elastic Container Service for Kubernetes (EKS), Microsoft's\nAzure Kubernetes Service (AKS) and Google's own Kubernetes Engine (GKE). This ability to support on-premises, public\ncloud and hybrid deployments using a single technology and avoiding vendor lock-in, helps further confirm the grip\nKubernetes has on the DevOps mindset.")]),e._v(" "),n("p",[e._v("For more information on Kubernetes, refer to "),n("a",{attrs:{href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);