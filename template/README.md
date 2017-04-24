<% const camelcasedName = this.camelcase(name) -%>
<% const normalUserName = username.toLowerCase() -%>
# <%= name %>

[![Build Status](https://travis-ci.org/tiaanduplessis/micro.svg?branch=master)](https://travis-ci.org/<%= normalUserName %>/<%= name %>)

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/<%= normalUserName %>/<%= name %>)


## Usage

```sh
$ npm install --global micro
$ micro
```


## Deployment

This microservice can be deployed to [now](https://zeit.co/now) by Zeit.
Assuming you've got `now` installed and set up:

```sh
$ now <%= normalUserName %>/<%= name %>
```

Alternative, deploy right now without even leaving the browser:

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/<%= normalUserName %>/<%= name %>)


## License

**<%= name %>** © [<%= username %>](https://github.com/<%= normalUserName %>), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by <%= username %> with help from contributors ([list](https://github.com/<%= normalUserName %>/<%= name %>/contributors)).

> [<%= website.replace(/^https?:\/\//, '') %>](<%= website %>) · GitHub [@<%= username %>](https://github.com/<%= normalUserName%>)
