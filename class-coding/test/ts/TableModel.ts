///<reference path="PredictionModel.ts" />
///<reference path="RowModel.ts" />

class TableModel {
  private _predictions: Array<PredictionModel>;
  public VisibleRows: KnockoutObservableArray<RowModel>;
  public Page: KnockoutObservable<number>;
  public Pages: KnockoutObservable<number>;
  public PageSize: number;
  public SortBy: KnockoutObservable<string>;

  public constructor() {
    this._predictions = [];
    this.VisibleRows = ko.observableArray([]);
    this.Page = ko.observable(1);
    this.Pages = ko.observable();
    this.SortBy = ko.observable("none");
    this.PageSize = Number.MAX_VALUE;
  }

  public AddPrediction(rawPrediction) {
    let prediction = new PredictionModel(rawPrediction);
    this._predictions.push(prediction);
  }

  public SetSorting(sort: string) {
    switch (sort) {
      case "time-asc":
        this.SortBy = ko.observable("time-asc");
        this._predictions.sort((p1, p2) => p1.TimeMoment - p2.TimeMoment);
        // this.SetPage(1);
        break;

      case "time-desc":
        this.SortBy = ko.observable("time-desc");
        this._predictions.sort((p1, p2) => p2.TimeMoment - p1.TimeMoment);
        // this.SetPage(1);
        break;
    }
    this.SortBy(sort);
  }

  public SetPageSize(pageSize: number) {
    this.PageSize = pageSize;
    this.Pages(Math.ceil(this._predictions.length / this.PageSize));
  }

  public SetPage(page) {
    /**
     * This method builds the viewable rows of the table, by creating an array of row elements and placing it into
     * the visible rows observable property
     */

    let maxPage =
      this.PageSize > this._predictions.length
        ? this._predictions.length
        : this.PageSize;

    let currentPageOfPredictions = this._predictions.slice(
      (page - 1) * maxPage,
      maxPage * page
    );

    let predictionsToDisplay = currentPageOfPredictions.map(
      (e) => new RowModel(e)
    );

    this.VisibleRows(predictionsToDisplay);

    this.Page(page);
  }
}
