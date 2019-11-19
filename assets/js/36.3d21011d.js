(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{225:function(e,a,t){"use strict";t.r(a);var n=t(0),o=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ldap-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ldap-integration","aria-hidden":"true"}},[e._v("#")]),e._v(" LDAP integration")]),e._v(" "),t("p",[e._v("By default, only a "),t("code",[e._v("kubeadmin")]),e._v(" user exists on your cluster after the initial deployment. To specify an identity provider, you must create an OCP custom resource (CR) that describes the identity provider and then add it to the cluster. This solution\nprovides a playbook to assist in the creation of such a custom resource for an LDAP identity provider.")]),e._v(" "),t("h2",{attrs:{id:"about-ldap-authentication-in-ocp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-ldap-authentication-in-ocp","aria-hidden":"true"}},[e._v("#")]),e._v(" About LDAP authentication in OCP")]),e._v(" "),t("p",[e._v("During authentication, the LDAP directory is searched for an entry that matches the provided user name. If a single unique match is found, a simple bind is attempted using the distinguished name (DN) of the entry plus the provided password. If the LDAP directory requires authentication to search, you must specify a bindDN and bindPassword for the account used when performing the entry search.")]),e._v(" "),t("p",[e._v("For more information on using LDAP, see the OpenShift Container Platform 4.1\ndocumentation for\n"),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.1/authentication/identity_providers/configuring-ldap-identity-provider.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuring LDAP Identity Provider"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"configuring-ldap-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-ldap-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring LDAP variables")]),e._v(" "),t("p",[e._v("All variables relating to LDAP configuration are described in the table below.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("ldap_bind_user_dn")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("The name (or Bind DN) of the LDAP user required to perform the search.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("vault.ldap_bind_user_password")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("b",[e._v("group_vars/all/vault.yml")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Password for the LDAP user account used to perform the search.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("ldap_ca_file")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Location of the CA Bundle of the LDAP server, exported in PEM format. A sample file is provided in "),t("code",[e._v("playbooks/roles/ldap/files/ca.pem")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("ldap_cr_file")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Location of the Custom Resource used to configure an Identity Provider. A sample file is provided in "),t("code",[e._v("playbooks/roles/ldap/vars/ldap_cr.yml")])])])])]),e._v(" "),t("p",[e._v("Extracting the CA bundle is specific to your particular LDAP server and is beyond the scope of this guide. Once you have\nobtained the information in the correct format, you should store it in a file on your Ansible controller.")]),e._v(" "),t("p",[e._v("The parameters and values in the Custom Resource file are highly dependent on your particular environment and,\nas a result,\nthese cannot be generalized in the solution. Appendix B provides a detailed overview of the sample Custom Resource file\nthat comes with this solution and more information can be found in the OCP online documentation in the article\n"),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.1/authentication/understanding-identity-provider.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding identity provider configuration"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"testing-the-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing-the-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Testing the configuration")]),e._v(" "),t("p",[e._v("Before running the playbook, it can be helpful to manually test your configuration. Install a tool such as "),t("code",[e._v("ldapsearch")]),e._v("\nand attempt to perform a query using the configuration information you have established. Initially, it is easier to use\ninsecure "),t("code",[e._v("ldap")]),e._v(" access, rather than secure "),t("code",[e._v("ldaps")]),e._v(", to perform the search. The following example uses the bind DN\nof "),t("code",[e._v("adreader")]),e._v(" and, as a result of specifying the "),t("code",[e._v("-W")]),e._v(" flag, you will be prompted to enter the corresponding password. You will need to adapt the URI "),t("code",[e._v("ldap://mars-adds.am2.cloudra.local")]),e._v(" and the parameters to your own environment.")]),e._v(" "),t("p",[e._v("For the example to be successful, you must have added a user "),t("code",[e._v("adocpuser1")]),e._v(" in the directory.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ dnf install -y openldap-clients\n\n$ ldapsearch -H ldap://mars-adds.am2.cloudra.local \\\n         -x -W -D "cn=adreader,cn=Users,dc=am2,dc=cloudra,dc=local" \\\n         -b "cn=Users,dc=am2,dc=cloudra,dc=local" \\\n         "(&(objectClass=person)(sAMAccountName=adocpuser1))"`\n\n')])])]),t("p",[e._v("The above query will replicate what the identity provider does when a user named "),t("code",[e._v("adocpuser1")]),e._v(" attempts to log in. If this\nuser exists in your LDAP directory, the search will return a single directory entry, similar to the following:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("filter: (&(objectClass=person)(sAMAccountName=adocpuser1))\nrequesting: All userApplication attributes\n# extended LDIF\n#\n# LDAPv3\n# base <cn=Users,dc=am2,dc=cloudra,dc=local> with scope subtree\n# filter: (&(objectClass=person)(sAMAccountName=adocpuser1))\n# requesting: ALL\n#\n\n# adocp user1, Users, am2.cloudra.local\ndn: CN=adocp user1,CN=Users,DC=am2,DC=cloudra,DC=local\nobjectClass: top\nobjectClass: person\nobjectClass: organizationalPerson\nobjectClass: user\ncn: adocp user1\nsn: user1\ngivenName: adocp\ndistinguishedName: CN=adocp user1,CN=Users,DC=am2,DC=cloudra,DC=local\ninstanceType: 4\nwhenCreated: 20191111160653.0Z\nwhenChanged: 20191112100318.0Z\ndisplayName: adocp user1\nuSNCreated: 188305\nmemberOf: CN=adocpusers,CN=Users,DC=am2,DC=cloudra,DC=local\nuSNChanged: 188439\nname: adocp user1\nobjectGUID:: FomFmxLnoEi0pnyxTbjHFg==\nuserAccountControl: 66048\nbadPwdCount: 0\ncodePage: 0\ncountryCode: 0\nbadPasswordTime: 0\nlastLogoff: 0\nlastLogon: 0\npwdLastSet: 132179620134013170\nprimaryGroupID: 513\nobjectSid:: AQUAAAAAAAUVAAAA1r8HwaYUleyBG+FYcgQAAA==\naccountExpires: 9223372036854775807\nlogonCount: 0\nsAMAccountName: adocpuser1\nsAMAccountType: 805306368\nuserPrincipalName: adocpuser1@am2.cloudra.local\nobjectCategory: CN=Person,CN=Schema,CN=Configuration,DC=am2,DC=cloudra,DC=local\ndSCorePropagationData: 20191111160653.0Z\ndSCorePropagationData: 16010101000000.0Z\nlastLogonTimestamp: 132180265987003551\n\n# search result\nsearch: 2\nresult: 0 Success\n\n# numResponses: 2\n# numEntries: 1\n")])])]),t("p",[e._v("Once your testing with insecure access is successful, configure "),t("code",[e._v("ldapsearch")]),e._v(" with the appropriate CA certificate\nfor your LDAP server and then switch to using "),t("code",[e._v("ldaps")]),e._v(" to test secure access as performed by the playbook.")]),e._v(" "),t("h2",{attrs:{id:"overview-of-the-playbook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-the-playbook","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview of the playbook")]),e._v(" "),t("p",[e._v("To access the identity provider, the playbook creates an OpenShift Container Platform "),t("code",[e._v("Secret")]),e._v(" named "),t("code",[e._v("ldap-secret")]),e._v(" that contains the "),t("code",[e._v("bindPassword")]),e._v(".")]),e._v(" "),t("p",[e._v("To support secure access to the identity provider, the playbook creates an OpenShift Container Platform "),t("code",[e._v("ConfigMap")]),e._v(" named "),t("code",[e._v("ca-config-map")]),e._v(" in the "),t("code",[e._v("openshift-config")]),e._v(" namespace to contain the certificate authority bundle.")]),e._v(" "),t("h2",{attrs:{id:"running-the-playbook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-the-playbook","aria-hidden":"true"}},[e._v("#")]),e._v(" Running the playbook")]),e._v(" "),t("p",[e._v("When you have confirmed that your configuration supports secure access to the LDAP directory, you can run the integration playbook as follows:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd ~/OpenShift-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/ldap.yml\n")])])]),t("p",[e._v("You may have to wait a few seconds after the playbook completes, before the authentication cluster operator is available.")]),e._v(" "),t("h2",{attrs:{id:"verification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verification","aria-hidden":"true"}},[e._v("#")]),e._v(" Verification")]),e._v(" "),t("p",[e._v("You can now attempt to log in using the LDAP identity provider, using either the command line or the web console.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc login -u adocpuser1\nAuthentication required for https://api.ocp.hpecloud.org:6443 (openshift)\nUsername: adocpuser1\nPassword:\nLogin successful.\n\nYou don't have any projects. You can try to create a new project, by running\n\n    oc new-project <projectname>\n\n\n$ oc whoami\nadocpuser1\n")])])]),t("h2",{attrs:{id:"synchronizing-groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronizing-groups","aria-hidden":"true"}},[e._v("#")]),e._v(" Synchronizing groups")]),e._v(" "),t("p",[e._v("As an OpenShift administrator, you can use groups to manage users, change their permissions, and enhance collaboration.\nYour organization may have already created user groups and stored them in an LDAP server. OpenShift can sync those\nLDAP records with internal OpenShift records, enabling you to manage your groups in one place. OpenShift currently\nsupports group sync with LDAP servers using three common schemas for defining group membership:\nRFC 2307, Active Directory, and augmented Active Directory. More information on LDAP synchronization is available\nin the OCP 3.11 documentation at\n"),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/3.11/install_config/syncing_groups_with_ldap.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/3.11/install_config/syncing_groups_with_ldap.html"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("This solution does not provide any playbooks to support synchronization. However, the following example shows how\nit can be performed manually. It assumes that you have created a group of ordinary users in your LDAP directory,\nnamed "),t("code",[e._v("adocpusers")]),e._v(" and containing users "),t("code",[e._v("adocpuser1")]),e._v(" and "),t("code",[e._v("adocpuser2")]),e._v(".\nIt also assumes a group of administrators, "),t("code",[e._v("adocpadmins")]),e._v(", containing users "),t("code",[e._v("adocpadmin1")]),e._v(" and "),t("code",[e._v("adocpadmin2")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"sync-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sync-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Sync example")]),e._v(" "),t("p",[e._v("In order to sync OpenShift group records with those from an external provider, determine which groups you wish to sync\nand where their records live. For instance, all or some groups may be selected from those stored on an LDAP\nserver. The path to a sync configuration file is required in order to describe how data is requested from the external\nrecord store and migrated to OpenShift records. Default behavior is to do a dry-run without changing OpenShift records.\nPassing '--confirm' will sync all groups from the LDAP server returned by the LDAP query templates.")]),e._v(" "),t("p",[e._v("Create a sync file "),t("code",[e._v("ad-config.yaml")]),e._v(" similar to the following, adapting the parameters and values for your own environment.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kind: LDAPSyncConfig\napiVersion: v1\nurl: ldaps://mars-adds.am2.cloudra.local\nca: playbooks/roles/ldap/files/ca.pem\ninsecure: false\nbindDN: cn=adreader,cn=Users,dc=am2,dc=cloudra,dc=local\nbindPassword: *******\nactiveDirectory:\n  usersQuery:\n    baseDN: cn=Users,dc=am2,dc=cloudra,dc=local\n    scope: sub\n    derefAliases: never\n    filter: (objectClass=person)\n    pageSize: 0\n  userNameAttributes: [ sAMAccountName ]\n  groupMembershipAttributes: [ memberOf ]\n")])])]),t("p",[e._v("Run the sync command, without the "),t("code",[e._v("--confirm")]),e._v(" flag, to identify the groups in your LDAP directory:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc adm groups sync --sync-config=ad-config.yaml\n")])])]),t("p",[e._v("This command will produce output similar to the following:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('...\n- metadata:\n    annotations:\n      openshift.io/ldap.sync-time: 2019-11-12T06:41:23-0500\n      openshift.io/ldap.uid: CN=adocpadmins,CN=Users,DC=am2,DC=cloudra,DC=local\n      openshift.io/ldap.url: mars-adds.am2.cloudra.local:636\n    creationTimestamp: "2019-11-12T11:37:15Z"\n    labels:\n      openshift.io/ldap.host: mars-adds.am2.cloudra.local\n    name: adocpadmins\n    resourceVersion: "1924931"\n    selfLink: /apis/user.openshift.io/v1/groups/adocpadmins\n    uid: c6c1ba9d-0540-11ea-bcd8-0a580a80021c\n  users:\n  - adocpadmin1\n  - adocpadmin2\n...\n- metadata:\n    annotations:\n      openshift.io/ldap.sync-time: 2019-11-12T06:41:23-0500\n      openshift.io/ldap.uid: CN=adocpusers,CN=Users,DC=am2,DC=cloudra,DC=local\n      openshift.io/ldap.url: mars-adds.am2.cloudra.local:636\n    creationTimestamp: "2019-11-12T11:38:02Z"\n    labels:\n      openshift.io/ldap.host: mars-adds.am2.cloudra.local\n    name: adocpusers\n    resourceVersion: "1925158"\n    selfLink: /apis/user.openshift.io/v1/groups/adocpusers\n    uid: e240adc2-0540-11ea-8e34-0a580a810017\n  users:\n  - adocpuser1\n  - adocpuser2\n')])])]),t("p",[e._v("Note how the "),t("code",[e._v("ldap.uid")]),e._v(" fields use capital letters: "),t("code",[e._v("CN=adocpadmins,CN=Users,DC=am2,DC=cloudra,DC=local")]),e._v(".")]),e._v(" "),t("p",[e._v("Before syncing the data, add "),t("code",[e._v("groupUIDNameMapping")]),e._v(" to your sync configuration file to map the LDAP groups to the\ngroup names you want to use in OCP, in this instance "),t("code",[e._v("adocpusers")]),e._v(" and "),t("code",[e._v("adocpadmins")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('groupUIDNameMapping:\n  "CN=adocpusers,CN=Users,DC=am2,DC=cloudra,DC=local": adocpusers\n  "CN=adocpadmins,CN=Users,DC=am2,DC=cloudra,DC=local": adocpadmins\n')])])]),t("p",[e._v("So your complete sync file should now look like:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('kind: LDAPSyncConfig\napiVersion: v1\nurl: ldaps://mars-adds.am2.cloudra.local\nca: playbooks/roles/ldap/files/ca.pem\ninsecure: false\nbindDN: cn=myuser,cn=Users,dc=am2,dc=cloudra,dc=local\nbindPassword: ********\ngroupUIDNameMapping:\n  "CN=adocpusers,CN=Users,DC=am2,DC=cloudra,DC=local": adocpusers\n  "CN=adocpadmins,CN=Users,DC=am2,DC=cloudra,DC=local": adocpadmins\nactiveDirectory:\n  usersQuery:\n    baseDN: cn=Users,dc=am2,dc=cloudra,dc=local\n    scope: sub\n    derefAliases: never\n    filter: (objectClass=person)\n    pageSize: 0\n  userNameAttributes: [ sAMAccountName ]\n  groupMembershipAttributes: [ memberOf ]\n')])])]),t("p",[e._v("By default, the sync command will synchronize based on all the data found in your LDAP directory. You can limit the\nsync to specific groups by supplying a whitelist to the sync command. Run the command without the "),t("code",[e._v("--confirm")]),e._v(" flag,\nand provide a whitelist of the groups you want to sync, using the "),t("code",[e._v("ldap.uid")]),e._v(" values returned earlier:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ oc adm groups sync \\\n   --sync-config=ad-config.yaml \\\n   "CN=adocpusers,CN=Users,DC=am2,DC=cloudra,DC=local" \\\n   "CN=adocpadmins,CN=Users,DC=am2,DC=cloudra,DC=local"\n')])])]),t("p",[e._v("The command will perform a dry-run and return the values it would have synchronized, showing the two groups and the\ncorresponding users:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('apiVersion: v1\nitems:\n- metadata:\n    annotations:\n      openshift.io/ldap.sync-time: 2019-11-14T05:54:50-0500\n      openshift.io/ldap.uid: CN=adocpusers,CN=Users,DC=am2,DC=cloudra,DC=local\n      openshift.io/ldap.url: mars-adds.am2.cloudra.local:636\n    creationTimestamp: "2019-11-12T11:38:02Z"\n    labels:\n      openshift.io/ldap.host: mars-adds.am2.cloudra.local\n    name: adocpusers\n    resourceVersion: "1925158"\n    selfLink: /apis/user.openshift.io/v1/groups/adocpusers\n    uid: e240adc2-0540-11ea-8e34-0a580a810017\n  users:\n  - adocpuser1\n  - adocpuser2\n- metadata:\n    annotations:\n      openshift.io/ldap.sync-time: 2019-11-14T05:54:50-0500\n      openshift.io/ldap.uid: CN=adocpadmins,CN=Users,DC=am2,DC=cloudra,DC=local\n      openshift.io/ldap.url: mars-adds.am2.cloudra.local:636\n    creationTimestamp: "2019-11-12T11:37:15Z"\n    labels:\n      openshift.io/ldap.host: mars-adds.am2.cloudra.local\n    name: adocpadmins\n    resourceVersion: "1924931"\n    selfLink: /apis/user.openshift.io/v1/groups/adocpadmins\n    uid: c6c1ba9d-0540-11ea-bcd8-0a580a80021c\n  users:\n  - adocpadmin1\n  - adocpadmin2\nkind: List\nmetadata: {}\n')])])]),t("p",[e._v("Now run the sync command with the "),t("code",[e._v("--confirm")]),e._v(" flag to synchronize the groups to your OCP cluster:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ oc adm groups sync \\\n   --sync-config=ad-config.yaml \\\n   "CN=adocpusers,CN=Users,DC=am2,DC=cloudra,DC=local" \\\n   "CN=adocpadmins,CN=Users,DC=am2,DC=cloudra,DC=local" \\\n   --confirm\n\ngroup/adocpusers\ngroup/adocpadmins\n')])])]),t("p",[e._v("You can confirm that the groups have been added to the cluster:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get groups\n\nNAME          USERS\nadocpadmins   adocpadmin1, adocpadmin2\nadocpusers    adocpuser1, adocpuser2\n")])])]),t("h2",{attrs:{id:"adding-cluster-admin-role-to-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-cluster-admin-role-to-group","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding cluster admin role to group")]),e._v(" "),t("p",[e._v("Once you have added the "),t("code",[e._v("adocpadmins")]),e._v(" group to your cluster, you can give administration privileges to\nmembers of the group.")]),e._v(" "),t("p",[e._v("Log in with the initial "),t("code",[e._v("kubeadmin")]),e._v(" user account, as outlined in the section "),t("code",[e._v("Logging into the OCP cluster for the first time")]),e._v(".")]),e._v(" "),t("p",[e._v("Assign the "),t("code",[e._v("cluster-admin")]),e._v(" role to the "),t("code",[e._v("adocpadmins")]),e._v(" group:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc adm policy add-cluster-role-to-group cluster-admin adocpadmins\n")])])]),t("p",[e._v("Now , when a member of the "),t("code",[e._v("ocadmingroup")]),e._v(" logs in to the cluster, the user will have cluster adminsitration privileges and access to all the projects/namespaces:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc login -u adocpadmin1\nAuthentication required for https://api.ocp.hpecloud.org:6443 (openshift)\nUsername: adocpadmin1\nPassword:\nLogin successful.\n\nYou have access to the following projects and can switch between them with 'oc project <projectname>':\n\n  * default\n    kube-public\n    kube-system\n    openshift\n    openshift-apiserver\n    openshift-apiserver-operator\n    openshift-authentication\n    openshift-authentication-operator\n    openshift-cloud-credential-operator\n    openshift-cluster-machine-approver\n    openshift-cluster-node-tuning-operator\n    openshift-cluster-samples-operator\n...\n")])])]),t("p",[e._v("It is recommended that you delete the initial "),t("code",[e._v("kubeadmin")]),e._v(" user, once you have successfully created and tested new admin user accounts:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc delete secret kubeadmin -n kube-system\n")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);