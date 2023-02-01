/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var floor = require( '@stdlib/math-base-special-floor' );
var sqrt = require( '@stdlib/math-base-special-sqrt' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var Float64Array = require( '@stdlib/array-float64' );
var dnanstdevch = require( './../lib/dnanstdevch.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dnanstdevch, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( dnanstdevch.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the population standard deviation of a strided array (ignoring `NaN` values)', function test( t ) {
	var x;
	var v;
	var i;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ] );

	v = dnanstdevch( x.length, 0, x, 1 );
	t.strictEqual( v, sqrt( 53.5/(x.length-1) ), 'returns expected value' );

	x = new Float64Array( [ 1.0, NaN, NaN, -2.0, NaN, -4.0, NaN, 5.0, NaN, 0.0, 3.0, NaN ] ); // eslint-disable-line max-len

	v = dnanstdevch( x.length, 0, x, 1 );
	t.strictEqual( v, sqrt( 53.5/(x.length-6) ), 'returns expected value' );

	x = new Float64Array( [ -4.0, NaN ] );

	v = dnanstdevch( x.length, 0, x, 1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );

	v = dnanstdevch( x.length, 0, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN ] );
	v = dnanstdevch( x.length, 0, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ 4.0 ] );
	v = dnanstdevch( x.length, 0, x, 1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float64Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = 100.0;
	}
	v = dnanstdevch( x.length, 0, x, 1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ] ); // eslint-disable-line max-len
	v = dnanstdevch( x.length, 0, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = NaN;
	}
	v = dnanstdevch( x.length, 0, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample standard deviation of a strided array (ignoring `NaN` values)', function test( t ) {
	var x;
	var v;
	var i;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ] );

	v = dnanstdevch( x.length, 1, x, 1 );
	t.strictEqual( v, sqrt( 53.5/(x.length-2) ), 'returns expected value' );

	x = new Float64Array( [ 1.0, NaN, NaN, -2.0, NaN, -4.0, NaN, 5.0, NaN, 0.0, 3.0, NaN ] ); // eslint-disable-line max-len

	v = dnanstdevch( x.length, 1, x, 1 );
	t.strictEqual( v, sqrt( 53.5/(x.length-7) ), 'returns expected value' );

	x = new Float64Array( [ -4.0, NaN ] );

	v = dnanstdevch( x.length, 1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );

	v = dnanstdevch( x.length, 1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN ] );
	v = dnanstdevch( x.length, 1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ 4.0 ] );
	v = dnanstdevch( x.length, 1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = 100.0;
	}
	v = dnanstdevch( x.length, 1, x, 1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ] ); // eslint-disable-line max-len
	v = dnanstdevch( x.length, 1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = NaN;
	}
	v = dnanstdevch( x.length, 1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanstdevch( 0, 1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = dnanstdevch( -1, 1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns a population standard deviation of `0` provided the first element is not `NaN`', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanstdevch( 1, 0, x, 1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float64Array( [ NaN, 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanstdevch( 1, 0, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns a sample standard deviation equal to `NaN`', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanstdevch( 1, 1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanstdevch( 1, 1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `correction` parameter yielding a correction term less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanstdevch( x.length, x.length, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = dnanstdevch( x.length, x.length+1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var N;
	var x;
	var v;

	x = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0,
		NaN,  // 4
		NaN
	]);

	N = floor( x.length / 2 );
	v = dnanstdevch( N, 1, x, 2 );

	t.strictEqual( v, 2.5, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', function test( t ) {
	var N;
	var x;
	var v;
	var i;

	x = new Float64Array([
		NaN,  // 4
		NaN,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	N = floor( x.length / 2 );

	v = dnanstdevch( N, 1, x, -2 );
	t.strictEqual( v, 2.5, 'returns expected value' );

	x = new Float64Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = 100.0;
	}
	v = dnanstdevch( x.length, 1, x, -1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns `0` provided the correction term is not less than `0` and the first element is not `NaN`', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanstdevch( x.length, 1, x, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float64Array( [ NaN, 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanstdevch( x.length, 1, x, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanstdevch( x.length, x.length, x, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var x0;
	var x1;
	var N;
	var v;

	x0 = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0,
		NaN,  // 4
		NaN
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
	N = floor(x1.length / 2);

	v = dnanstdevch( N, 1, x1, 2 );
	t.strictEqual( v, 2.5, 'returns expected value' );

	t.end();
});
