(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{263:function(e,a,t){"use strict";t.r(a);var n=t(0),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"appendix-b-sample-ldap-cr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appendix-b-sample-ldap-cr","aria-hidden":"true"}},[e._v("#")]),e._v(" Appendix B: Sample LDAP CR")]),e._v(" "),t("p",[e._v("A sample Custom Resource (CR), "),t("code",[e._v("playbooks/roles/ldap/vars/ldap_cr.yml")]),e._v(", is included in the solution. It shows\nthe parameters and example values for an LDAP identity provider.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('apiVersion: config.openshift.io/v1\nkind: OAuth\nmetadata:\n  name: cluster\nspec:\n  identityProviders:\n  - name: msad\n    mappingMethod: claim\n    type: LDAP\n    ldap:\n      attributes:\n        id:\n        - name\n        email:\n        - UserPrincipalName\n        name:\n        - cn\n        preferredUsername:\n        - sAMAccountName\n      bindDN: "{{ ldap_bind_user_dn }}"\n      bindPassword:\n        name: ldap-secret\n      ca:\n        name: ca-config-map\n      insecure: false\n      url: "ldaps://mars-adds.am2.cloudra.local/CN=Users,DC=am2,DC=cloudra,DC=local?sAMAccountName??(objectClass=person)"\n')])])]),t("ul",[t("li",[t("p",[e._v("The identity provider name is prefixed to the returned user ID to form an identity name. In this instance, the example name "),t("code",[e._v("msad")]),e._v(" is used to indicate Microsoft Active Directory is being used. After the identity provider has been set up, you can use the "),t("code",[e._v("oc get identities")]),e._v(" command to see the prefix in use:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get identities\nNAME                            IDP NAME   IDP USER NAME              USER NAME     \nmsad:YWRvY3AgYWRtaW4x           msad       YWRvY3AgYWRtaW4x           adocpadmin1   \nmsad:YWRvY3AgdXNlcjE            msad       YWRvY3AgdXNlcjE            adocpuser1\n")])])]),t("p",[e._v("The identity provider name is also displayed as an option when logging in to the web console.")])]),e._v(" "),t("li",[t("p",[e._v("The "),t("code",[e._v("bindDN")]),e._v(" parameter is the name of the LDAP user required to perform the search. This value is actually defined in the "),t("code",[e._v("group_vars\\all\\vars.yml")]),e._v(" file using the variable "),t("code",[e._v("ldap_bind_user_dn")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("The "),t("code",[e._v("bindPassword")]),e._v(" is stored in a secret which is created when you run the "),t("code",[e._v("playbooks\\ldap.yml")]),e._v(" playbook. The underlying password itself should be strored in "),t("code",[e._v("group_vars/all/vault.yml")]),e._v(" as the value of the variable "),t("code",[e._v("vault.ldap_bind_user_password")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("The "),t("code",[e._v("mappingMethod")]),e._v(" defines how new identities are mapped to users when they log in. The value "),t("code",[e._v("claim")]),e._v(" will cause a new user to be created if one does not already exist with that name. It will fail if a user with that user name is already mapped to another identity.")])]),e._v(" "),t("li",[t("p",[e._v("The "),t("code",[e._v("url")]),e._v(" is an RFC 2255 URL, which specifies the LDAP host and search parameters to use. The syntax of the URL is:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ldap://host:port/basedn?attribute?scope?filter\n")])])])])]),e._v(" "),t("p",[e._v("More information on configuring the custom resource is available at\n"),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.1/authentication/identity_providers/configuring-ldap-identity-provider.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.1/authentication/identity_providers/configuring-ldap-identity-provider.html"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=s.exports}}]);