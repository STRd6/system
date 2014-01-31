The System
==========

Bringing method to the madness.

Wherein I attempt to document my system for creating applications using a
"serverless" architecture.

Description
-----------

Web applications have become too monolithic and too complicated. My goal is to
remedy that by creating a collection of independent modules that enable the
creation of simpler components.

A classic Rails application contains server code, database code, JavaSrcipt,
Ruby, CSS, HTML, one or more templating languages, and probably several embedded
services. This madness must come to an end.

The natural split would be to seperate frontend JS, HTML, CSS applications from
backend services.

Web Applications
----------------

Web applications are static HTML documents that live on the internet. That is
all they must be.

Services
--------

Services are front-end-less components that can be used by the "serverless"
applications. They can be hosted for free on Heroku, or you can self-host them
on dokku or similar.

Editor
------

The primary component is the editor. It publishes applications to github pages.
Since the applications are simply static HTML and assets, they can be published
anywhere: self-hosted on a shared server, Amazon S3, run with nginx on dokku, 
or with a static Heroku buildpack. They can truly run anywhere.

[See it in action](/editor)

[More...](/editor/docs)

CLI
---

If the self hosting web based editor isn't your thing you can use whatever tools
you like on your local computer, then build the app with our CLI.

[More...](http://distri.github.io/cli/docs)

Philosophy
----------

One may think of this movement as a sort of "anti-Rails", but it is actually
much closer to the original intention of Rails when it was younger.

Applications used to be simpler, but as time progresses complications ensue.
This is the natural order of things. At some point in order to continue we must
split and diversify with simpler more focused pieces. Complexity necessitates a
simplifing divergence, which again allows for more complex growth in an endless
cycle. So it goes.
