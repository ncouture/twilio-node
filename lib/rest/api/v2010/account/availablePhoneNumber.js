'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var LocalList = require('./availablePhoneNumber/local').LocalList;
var MobileList = require('./availablePhoneNumber/mobile').MobileList;
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var TollFreeList = require('./availablePhoneNumber/tollFree').TollFreeList;
var values = require('../../../../base/values');  /* jshint ignore:line */

var AvailablePhoneNumberCountryList;
var AvailablePhoneNumberCountryPage;
var AvailablePhoneNumberCountryInstance;
var AvailablePhoneNumberCountryContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList
 * @description Initialize the AvailablePhoneNumberCountryList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
AvailablePhoneNumberCountryList = function
    AvailablePhoneNumberCountryList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function availablePhoneNumbers
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext}
   */
  /* jshint ignore:end */
  function AvailablePhoneNumberCountryListInstance(sid) {
    return AvailablePhoneNumberCountryListInstance.get(sid);
  }

  AvailablePhoneNumberCountryListInstance._version = version;
  // Path Solution
  AvailablePhoneNumberCountryListInstance._solution = {
    accountSid: accountSid
  };
  AvailablePhoneNumberCountryListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/AvailablePhoneNumbers.json' // jshint ignore:line
  )(AvailablePhoneNumberCountryListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams AvailablePhoneNumberCountryInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  AvailablePhoneNumberCountryListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          opts.callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * @description Lists AvailablePhoneNumberCountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AvailablePhoneNumberCountryListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of AvailablePhoneNumberCountryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AvailablePhoneNumberCountryListInstance.page = function page(opts, callback) {
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({
      uri: this._uri,
      method: 'GET',
      params: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new AvailablePhoneNumberCountryPage(
        this._version,
        payload,
        this._solution
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of AvailablePhoneNumberCountryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AvailablePhoneNumberCountryListInstance.getPage = function getPage(targetUrl,
      callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new AvailablePhoneNumberCountryPage(
        this._version,
        payload,
        this._solution
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a available_phone_number_country
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList
   * @instance
   *
   * @param {string} countryCode - The country_code
   *
   * @returns {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext}
   */
  /* jshint ignore:end */
  AvailablePhoneNumberCountryListInstance.get = function get(countryCode) {
    return new AvailablePhoneNumberCountryContext(
      this._version,
      this._solution.accountSid,
      countryCode
    );
  };

  return AvailablePhoneNumberCountryListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryPage
 * @augments Page
 * @description Initialize the AvailablePhoneNumberCountryPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns AvailablePhoneNumberCountryPage
 */
/* jshint ignore:end */
AvailablePhoneNumberCountryPage = function
    AvailablePhoneNumberCountryPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(AvailablePhoneNumberCountryPage.prototype, Page.prototype);
AvailablePhoneNumberCountryPage.prototype.constructor = AvailablePhoneNumberCountryPage;

/* jshint ignore:start */
/**
 * Build an instance of AvailablePhoneNumberCountryInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns AvailablePhoneNumberCountryInstance
 */
/* jshint ignore:end */
AvailablePhoneNumberCountryPage.prototype.getInstance = function
    getInstance(payload) {
  return new AvailablePhoneNumberCountryInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
 * @description Initialize the AvailablePhoneNumberCountryContext
 *
 * @property {string} countryCode -
 *          The ISO Country code to lookup phone numbers for.
 * @property {string} country - The country
 * @property {string} uri - The uri
 * @property {boolean} beta - The beta
 * @property {string} subresourceUris - The subresource_uris
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {iso_country_code} countryCode - The country_code
 */
/* jshint ignore:end */
AvailablePhoneNumberCountryInstance = function
    AvailablePhoneNumberCountryInstance(version, payload, accountSid,
    countryCode) {
  this._version = version;

  // Marshaled Properties
  this.countryCode = payload.country_code; // jshint ignore:line
  this.country = payload.country; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.beta = payload.beta; // jshint ignore:line
  this.subresourceUris = payload.subresource_uris; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode || this.countryCode,
  };
};

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AvailablePhoneNumberCountryContext(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a AvailablePhoneNumberCountryInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AvailablePhoneNumberCountryInstance
 */
/* jshint ignore:end */
AvailablePhoneNumberCountryInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Access the local
 *
 * @function local
 * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
 * @instance
 *
 * @returns {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList}
 */
/* jshint ignore:end */
AvailablePhoneNumberCountryInstance.prototype.local = function local() {
  return this._proxy.local;
};

/* jshint ignore:start */
/**
 * Access the tollFree
 *
 * @function tollFree
 * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
 * @instance
 *
 * @returns {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.TollFreeList}
 */
/* jshint ignore:end */
AvailablePhoneNumberCountryInstance.prototype.tollFree = function tollFree() {
  return this._proxy.tollFree;
};

/* jshint ignore:start */
/**
 * Access the mobile
 *
 * @function mobile
 * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
 * @instance
 *
 * @returns {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileList}
 */
/* jshint ignore:end */
AvailablePhoneNumberCountryInstance.prototype.mobile = function mobile() {
  return this._proxy.mobile;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext
 * @description Initialize the AvailablePhoneNumberCountryContext
 *
 * @property {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList} local -
 *          local resource
 * @property {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.TollFreeList} tollFree -
 *          tollFree resource
 * @property {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileList} mobile -
 *          mobile resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {iso_country_code} countryCode - The country_code
 */
/* jshint ignore:end */
AvailablePhoneNumberCountryContext = function
    AvailablePhoneNumberCountryContext(version, accountSid, countryCode) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/AvailablePhoneNumbers/<%= countryCode %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._local = undefined;
  this._tollFree = undefined;
  this._mobile = undefined;
};

/* jshint ignore:start */
/**
 * fetch a AvailablePhoneNumberCountryInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AvailablePhoneNumberCountryInstance
 */
/* jshint ignore:end */
AvailablePhoneNumberCountryContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AvailablePhoneNumberCountryInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.countryCode
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype,
  'local', {
  get: function() {
    if (!this._local) {
      this._local = new LocalList(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    }
    return this._local;
  }
});

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype,
  'tollFree', {
  get: function() {
    if (!this._tollFree) {
      this._tollFree = new TollFreeList(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    }
    return this._tollFree;
  }
});

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype,
  'mobile', {
  get: function() {
    if (!this._mobile) {
      this._mobile = new MobileList(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    }
    return this._mobile;
  }
});

module.exports = {
  AvailablePhoneNumberCountryList: AvailablePhoneNumberCountryList,
  AvailablePhoneNumberCountryPage: AvailablePhoneNumberCountryPage,
  AvailablePhoneNumberCountryInstance: AvailablePhoneNumberCountryInstance,
  AvailablePhoneNumberCountryContext: AvailablePhoneNumberCountryContext
};
