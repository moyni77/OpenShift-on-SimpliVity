(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{424:function(e,t,a){"use strict";a.r(t);var l=a(42),o=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuring-cluster-logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-cluster-logging"}},[e._v("#")]),e._v(" Configuring cluster logging")]),e._v(" "),a("p",[e._v("The playbooks support two distinct profiles for cluster logging deployment, "),a("code",[e._v("small")]),e._v(" and "),a("code",[e._v("large")]),e._v(".  The profile is\ndetermined by the variable "),a("code",[e._v("efk_profile")]),e._v(" in the configuration file "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(". If you do not specify\nany value, the "),a("code",[e._v("small")]),e._v(" profile will be deployed by default. You can also use the playbooks to migrate from\na "),a("code",[e._v("small")]),e._v(" profile to a "),a("code",[e._v("large")]),e._v(" profile.")]),e._v(" "),a("p",[e._v("The playbooks support the deployment of different versions of the EFK stack, based on the value of the variable\n"),a("code",[e._v("efk_channel")]),e._v(".\nTo deploy the current OCP 4.2 stack, you must set the "),a("code",[e._v("efk_channel")]),e._v(" variable to "),a("code",[e._v("4.2")]),e._v(".\nIf you want to use the legacy OCP 4.1 version of the stack on an OCP 4.1 cluster, set the "),a("code",[e._v("efk_channel")]),e._v("\nvariable to "),a("code",[e._v("preview")]),e._v(". Note that you cannot use the "),a("code",[e._v("preview")]),e._v(" channel on an OCP 4.2 cluster.")]),e._v(" "),a("p",[e._v("You can configure a persistent storage class and size for the Elasticsearch cluster. The Cluster Logging Operator creates\na PersistentVolumeClaim for each data node in the Elasticsearch cluster based on the relevant parameters in your\nconfiguration file.")]),e._v(" "),a("h2",{attrs:{id:"configuration-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-variables"}},[e._v("#")]),e._v(" Configuration variables")]),e._v(" "),a("p",[e._v("The variables for configuring cluster logging are described in the following table:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("efk_channel")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("This required variable determines the version of the EFK stack deployed. For OCP 4.2, set this value to "),a("code",[e._v("4.2")]),e._v(". For OCP 4.1, this "),a("em",[e._v("must")]),e._v(" be set to "),a("code",[e._v("preview")]),e._v(". Note that "),a("code",[e._v("preview")]),e._v(" channel will not work on OCP 4.2.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("efk_profile")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Determines the profile used when deploying the EFK stack."),a("br"),a("br"),a("code",[e._v("small")]),e._v(" suitable for proof of concept deployments, deploying a single instance of Elasticsearch and Kibana,  requiring 2 GB memory and minimal vCPU (200m)"),a("br"),a("br"),a("code",[e._v("large")]),e._v(" suitable for a production environment, deploying three Elasticsearch pods, each requiring a minimum of 16GB and 1 vCPU, and 2 Kibana instances"),a("br"),a("br"),e._v("Defaults to "),a("code",[e._v("small")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("efk_es_pv_size")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Size of the Persistent Volume used to hold Elasticsearch data. The default size is "),a("code",[e._v("'200G'")]),e._v(".")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("efk_es_pv_storage_class")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("The Storage Class to use when creating Elasticsearch Persistent Volumes. The default storage class name is "),a("code",[e._v("'thin'")]),e._v(".")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);