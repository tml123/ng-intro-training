### Writing Components

To keep all of our components separate, first right click on your `app` directory in the stackblitz navigator. Create a new folder called `components`.
Then, right click on the `components` directory in your project and create a new component called `brewery-list`.

Open `app.module.ts` in the `app` directory. Note that the component you just created has been declared in the <a href="https://angular.io/guide/architecture-modules" target="_blank" rel="noopener noreferrer nofollow">`NgModule`</a> so that it is available to the rest of the project (or at least the rest of this `NgModule`).

Great! But, before we start utilizing this component, let's go ahead and make use of `Typescript`. We'll create a model for the data that we're using today. We'll be using data from [Open Brewery DB](https://www.openbrewerydb.org/#documentation), so let's make an `interface` to model that data. It should look something like this:

```json
[
  ...
  {
    id: 299,
    name: "Almanac Beer Company",
    brewery_type: "micro",
    street: "651B W Tower Ave",
    city: "Alameda",
    state: "California",
    postal_code: "94501-5047",
    country: "United States",
    longitude: "-122.306283180899",
    latitude: "37.7834497667258",
    phone: "4159326531",
    website_url: "http://almanacbeer.com",
    updated_at: "2018-08-23T23:24:11.758Z",
    tag_list: []
  },
  ...
]
```

We'll keep our model in a separate `models` directory, so let's create that now. Create `interface IBrewery`.

Now that we have a good model for our data, let's see if we can make use of some data inside of our `brewery-list` component. We want to render a list of breweries inside of `brewery-list`, so create an attribute field called `breweries` of type `IBrewery[]`.

Since we want to render a list of items, we're going to want to reuse our `html`, i.e. not hard code the same `div` over and over again. We can use <a href="https://angular.io/api/common/NgForOf" target="_blank" rel="noopener nofollow">`*ngFor`</a> for this.

Open the `brewery-list.component.html` file and edit the template. Add the correct markup to iterate over the `breweries` attribute and render each entry. You should see nothing initially. Once you think you've got it, assign `breweries` to the following array:

```json
[
  {
    "id": 7082,
    "name": "Back Bay Brewing Company",
    "brewery_type": "micro",
    "street": "614 Norfolk Ave",
    "city": "Virginia Beach",
    "state": "Virginia",
    "postal_code": "23451-4419",
    "country": "United States",
    "longitude": "-75.9797441428571",
    "latitude": "36.8377837142857",
    "phone": "7575317750",
    "website_url": "http://www.backbaybrewingco.com",
    "updated_at": "2018-08-24T16:27:08.471Z",
    "tag_list": []
  },
  {
    "id": 7098,
    "name": "Belly Love Brewing Company",
    "brewery_type": "brewpub",
    "street": "725 E Main St",
    "city": "Purcellville",
    "state": "Virginia",
    "postal_code": "20132-3178",
    "country": "United States",
    "longitude": "-77.7015903",
    "latitude": "39.1364247",
    "phone": "5404413159",
    "website_url": "http://www.bellylovebrewing.com",
    "updated_at": "2018-08-24T16:27:27.910Z",
    "tag_list": []
  },
  {
    "id": 7105,
    "name": "Billsburg Brewery",
    "brewery_type": "micro",
    "street": "2054 Jamestown Rd",
    "city": "Williamsburg",
    "state": "Virginia",
    "postal_code": "23185-7911",
    "country": "United States",
    "longitude": "-76.7129558",
    "latitude": "37.2682365",
    "phone": "",
    "website_url": "http://www.billsburg.com",
    "updated_at": "2018-08-24T16:27:37.217Z",
    "tag_list": []
  },
  {
    "id": 7131,
    "name": "Bull Island Brewing Company",
    "brewery_type": "brewpub",
    "street": "758 Settlers Landing Rd",
    "city": "Hampton",
    "state": "Virginia",
    "postal_code": "23669-4035",
    "country": "United States",
    "longitude": "-76.3420654545455",
    "latitude": "37.0248734545455",
    "phone": "7577889489",
    "website_url": "http://www.bullislandbrewing.com",
    "updated_at": "2018-08-24T16:28:00.661Z",
    "tag_list": []
  },
  {
    "id": 7156,
    "name": "Eavesdrop Brewery",
    "brewery_type": "micro",
    "street": "7223 Centreville Rd Ste 115",
    "city": "Manassas",
    "state": "Virginia",
    "postal_code": "20111",
    "country": "United States",
    "longitude": "-77.469",
    "latitude": "38.752531",
    "phone": "7034208955",
    "website_url": "http://www.eavesdropbrewery.com",
    "updated_at": "2018-08-24T16:28:31.194Z",
    "tag_list": []
  }
]
```

Once you do that, you should see a list of breweries (or at least a list of data) displayed on the page.

Great -- we can now display a list of breweries.  Let's further abstract some logic into separate components.  Generate a new component called `brewery-list-item`.  Create an `@Input()` field called `brewery`; it should be of type `IBrewery`.  We're going to allow this component to do the rendering and contain any logic for each brewery in the list.  Go ahead and take the markup from the `brewery-list` and it to `brewery-list-item`.  Then have `brewery-list` render `brewery-list-item`s using the `@Input` we added to `brewery-list-item`.

Nice!  But what if we want to get something _out of_ the component.  We can use `@Output()` for that.  An output will be (in Angular terms) an `EventEmitter`.  Let's add an output to the `brewery-list-item` called `toggleSave` -- it should be of type `EventEmitter`, which is generic.  What type do you think it should be?

Now that we have added an `Output` to the `brewery-list-item`, we can wire that up inside of `brewery-list`.  Create a field called `onSave` inside of `brewery-list`.  For now, let's just have it do a simple `console.log`.  Set `(save)` on each `brewery-list-item` to `onToggleSave($event)` and give it a try.  Do you see the `console` logging your output?

Well, now that we are attempting to `save` breweries to our favorite list, we'll need some place in which to save them.  We can use a service for that.  Go ahead and create a service called `brewery` in the CLI.  That should create `BreweryService`.  Let's have `BreweryService` track a field called `favorites`.  What type should that be?

Add a method to `BreweryService` called `add`, which should take an argument called `brewery`.  Add another method called `remove`.  I'm sure you can guess what that should do.  Solid.  Now, let's connect the methods in `BreweryService` with the `brewery-list`'s method, `onToggleSave`.  We should see that the selected brewery is saved when it is not in the list or that it is removed when it is already in the list.

For our final item this round, create a component called `favorite-breweries`.  Let's make that display a list of our favorite breweries.  But, how do we get there?

Open the `app.routing.module.ts` file.  We'll add a route to the module with a `path` of `favorites`, which will render the `FavoriteBreweriesComponent`.  When you navigate to `/favorites`, you should see a list of your favorite breweries!

Next, we'll refactor this application a bit for a better UI/UX.

<a href="/lesson-3.md">Next Lesson</a>
