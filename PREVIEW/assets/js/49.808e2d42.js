(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{276:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"issues-fixed-in-this-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issues-fixed-in-this-release","aria-hidden":"true"}},[e._v("#")]),e._v(" Issues fixed in this release")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Load balancers: firewall zone settings were lost after a reboot")])]),e._v(" "),a("p",[e._v("After a reboot, the two interfaces of the load balancer VMs are now assigned to the correct firewall zones.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("DNS and DHCP services were not automatically restarted after a reboot of a support node")])]),e._v(" "),a("p",[e._v("These services are now started automatically after a reboot.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Cluster deployment could fail waiting for operators to be available")])]),e._v(" "),a("p",[e._v("After a successful bootstrap of the OCP cluster, the deployment could fail if all operators were not ready after a certain amount of time (10 mins). However, this was not necessarily a fatal error and could happen with the cluster under heavy load. The playbooks now continue after waiting for the operators and rely on the OCP installer to ensure that the deployment has completed successfully.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);