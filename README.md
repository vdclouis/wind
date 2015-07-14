#wind
> node application fetching the current wind conditions for a given spot

![waves screenshot](https://cldup.com/NP9QIac7mN.png)
## get started
* rename `apikey.template.js` to `apikey.js` and fill in your api key
* you can customise the surf spot, by changing the `spot` variable
* `$ node index.js` to run it

or you can also create an alias by adding this line to your `.bashrc` file:    
`alias wind="node path/to/wind/index.js"`    

that way you just need to type `wind` in your terminal for the app to run

thanks [Magic Seaweed](http://magicseaweed.com/) for providing the API

Based on [@scottjehl's](https://twitter.com/scottjehl) [tweet](https://twitter.com/scottjehl/status/443789925423386624)
