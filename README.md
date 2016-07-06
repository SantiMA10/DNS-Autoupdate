# DNS-Autoupdate

### Motivation
If you want to have your on web server, for example, in your Raspberry Pi with a custom domain, at least in Spain, you need to pay to your ISP for a static IP or update the DNS when the IP change.

For this reason I made a NodeJS script that you can program the execution with a crontab and automatically check if your public IP is diferent of the one in the DNS record and if it is it changes it.

## Install and use

**You need Node.js ([for Windows, Mac or Linux](https://nodejs.org/en/), for [Raspberry Pi](http://weworkweplay.com/play/raspberry-pi-nodejs/)) for running this.**

Download the [last release](https://github.com/SantiMA10/DNS-Autoupdate/releases), unzip it and download all the dependencies with **npm install**.

Now have to run the **"auth.js"** script on **"/services/{service name}/"**, for example: "/service/ovh/auth.js", and get a link to authorize the app, if you want to program the execution I recomend to set the **Validity** on **Unlimited**.

Once you visit the link and now you can run it using **node app.js** or program the execution with CronTab.

## Compatible domain providers
* OVH by [@SantiMA10](http://twitter.com)

### Issues and contributing

Please report any [issues](https://github.com/SantiMA10/Internet-Status-Check/issues). New features and ideas that you'd like to see implemented will be welcome, also feel free to send any pull requests.

## License

The MIT License (MIT)

Copyright (c) 2016 Santiago Martín - [http://SantiMA.xyz](http://santima.xyz) - [@SantiMA10](http://twitter.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
