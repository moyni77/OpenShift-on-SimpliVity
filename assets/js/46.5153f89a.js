(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{370:function(t,e,a){"use strict";a.r(e);var i=a(42),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sysdig-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysdig-integration"}},[t._v("#")]),t._v(" Sysdig integration")]),t._v(" "),a("h2",{attrs:{id:"introduction-to-sysdig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-sysdig"}},[t._v("#")]),t._v(" Introduction to Sysdig")]),t._v(" "),a("p",[t._v("The Sysdig Secure DevOps Platform converges security and compliance with performance and capacity monitoring to create a secure DevOps workflow. It is comprised of two main products:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Sysdig Secure:")]),t._v(" Allows you to efficiently resolve vulnerabilities, block threats at runtime and respond to incidents quickly — and be confident about your Kubernetes security.")]),t._v(" "),a("li",[a("strong",[t._v("Sysdig Monitor:")]),t._v(" Helps you deliver the performance and availability your users expect via context-based monitoring — and manage the risk, health and performance of your microservices.")])]),t._v(" "),a("p",[t._v("This solution focuses on the monitoring functionality and the Sysdig integration allows you to:")]),t._v(" "),a("ul",[a("li",[t._v("Simplify discovery and metric collection")]),t._v(" "),a("li",[t._v("Visualize service reliability")]),t._v(" "),a("li",[t._v("Monitor infrastructure and applications")]),t._v(" "),a("li",[t._v("Build robust dashboards")]),t._v(" "),a("li",[t._v("Simplify and scale Prometheus monitoring")]),t._v(" "),a("li",[t._v("Proactively alert for faster response")])]),t._v(" "),a("p",[t._v("By default, you must have outgoing port "),a("code",[t._v("6666")]),t._v(" open in your firewall, to allow data to flow to "),a("code",[t._v("collector.sysdigcloud.com")]),t._v(".\nYou can configure the agent to use a different port using the variable sysdig_collector_port in "),a("code",[t._v("group_vars/all/vars.yml")]),t._v(".\nFor more information, see the relevant Sysdig documentation at\n"),a("a",{attrs:{href:"https://support.sysdig.com/hc/en-us/articles/204205969",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://support.sysdig.com/hc/en-us/articles/204205969"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v('If you are using a proxy, it must be configured to be "fully-transparent". Non-transparent proxies will not\nallow the agent to connect.')]),t._v(" "),a("h2",{attrs:{id:"sysdig-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysdig-configuration"}},[t._v("#")]),t._v(" Sysdig configuration")]),t._v(" "),a("p",[t._v("The following table defines the variables used for configuring the Sysdig deployment on OpenShift.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault.sysdig_access_key")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After the activation of your account on the Sysdig portal, you will be provided with your access key which will be used by the playbooks to install the agent on cluster nodes.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("sysdig_k8s_cluster_name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Setting cluster name allows you to view, scope, and segment metrics in the Sysdig Monitor UI by OpenShift cluster.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("sysdig_tags")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tagging your hosts is highly recommended. Tags allow you to sort the nodes of your infrastructure into custom groups in Sysdig Monitor. Specify location, role, and owner in the format: "),a("code",[t._v("'location:City,role:OpenShift,owner:Customer Name'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("sysdig_collector")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The URL for the Sysdig SaaS, by default, "),a("code",[t._v("'collector.sysdigcloud.com'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("sysdig_collector_port")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The port used by the agent, by default,  "),a("code",[t._v("'6666'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("sysdig_ssl")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Optional. Defaults to "),a("code",[t._v("True")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("sysdig_ssl_verify_certificate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Optional. Defaults to "),a("code",[t._v("True")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("sysdig_new_k8s")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Optional. Defaults to "),a("code",[t._v("True")]),t._v(". Allows kube state metrics to be automatically detected, monitored, and displayed in Sysdig Monitor.")])])])]),t._v(" "),a("h2",{attrs:{id:"using-the-sysdig-playbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-sysdig-playbook"}},[t._v("#")]),t._v(" Using the Sysdig playbook")]),t._v(" "),a("p",[t._v("The playbook deploys the Sysdig Agent software\non all nodes in your OpenShift cluster, with captured data being relayed back to your Sysdig SaaS Cloud portal.")]),t._v(" "),a("p",[t._v("Once you have configured the relevant variable for Sysdig, you can run the playbook as follows:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd ~/OpenShift-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/sysdig.yml --vault-password-file .vault_pass\n")])])]),a("p",[t._v("Using the Sysdig software as a solution (SaaS) website "),a("a",{attrs:{href:"https://app.sysdigcloud.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://app.sysdigcloud.com"),a("OutboundLink")],1),t._v(",\nyou are able to view, analyze and inspect various different dashboards. Initially, you will just see the monitoring\ninformation for the infrastructure itself. Deploy a sample application and then use the Sysdig solution to analyze the\ndifferent facets of the deployed application.")])])}),[],!1,null,null,null);e.default=o.exports}}]);