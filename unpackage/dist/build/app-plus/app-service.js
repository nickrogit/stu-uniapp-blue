var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bluetooth'])
Z([[7],[3,'send_data_onoff']])
Z([[2,'!='],[[6],[[7],[3,'no_match_list']],[3,'length']],[1,0]])
Z([[2,'!='],[[6],[[7],[3,'match_list']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bluetooth data-v-270b7f8c'])
Z([[7],[3,'send_data_onoff']])
Z([[2,'!='],[[6],[[7],[3,'no_match_list']],[3,'length']],[1,0]])
Z([[2,'!='],[[6],[[7],[3,'match_list']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/tabBar/bluetooth/bluetooth.wxml','./pages/tabBar/blueya/blueya.wxml','./pages/tabBar/blueya2/blueya2.wxml','./pages/tabBar/component/component.wxml','./pages/tabBar/h5blue/h5blue.wxml','./pages/tabBar/plush5/plush5.wxml','./pages/tabBar/uni-blue/uni-blue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,1,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,2,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(xC,cF)
if(_oz(z,3,e,s,gg)){cF.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oH=_n('view')
_rz(z,oH,'class',0,e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,1,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,2,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(oH,lK)
if(_oz(z,3,e,s,gg)){lK.wxVkey=1
}
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
_(r,oH)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabBar/component/component","pages/tabBar/blueya/blueya","pages/tabBar/blueya2/blueya2","pages/tabBar/bluetooth/bluetooth","pages/tabBar/h5blue/h5blue","pages/tabBar/plush5/plush5","pages/tabBar/uni-blue/uni-blue"],"subPackages":[],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"blueya","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/tabBar/component/component","iconPath":"static/component.png","selectedIconPath":"static/componentHL.png","text":"蓝牙H5+"},{"pagePath":"pages/tabBar/uni-blue/uni-blue","iconPath":"static/component.png","selectedIconPath":"static/componentHL.png","text":"uni-blue"}]},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-bluetooth","compilerVersion":"2.0.0","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/tabBar/bluetooth/bluetooth.json']={"usingComponents":{}};
__wxAppCode__['pages/tabBar/bluetooth/bluetooth.wxml']=$gwx('./pages/tabBar/bluetooth/bluetooth.wxml');

__wxAppCode__['pages/tabBar/blueya/blueya.json']={"navigationBarTitleText":"蓝牙DEMO","usingComponents":{}};
__wxAppCode__['pages/tabBar/blueya/blueya.wxml']=$gwx('./pages/tabBar/blueya/blueya.wxml');

__wxAppCode__['pages/tabBar/blueya2/blueya2.json']={"usingComponents":{}};
__wxAppCode__['pages/tabBar/blueya2/blueya2.wxml']=$gwx('./pages/tabBar/blueya2/blueya2.wxml');

__wxAppCode__['pages/tabBar/component/component.json']={"navigationBarTitleText":"蓝牙H5+","usingComponents":{}};
__wxAppCode__['pages/tabBar/component/component.wxml']=$gwx('./pages/tabBar/component/component.wxml');

__wxAppCode__['pages/tabBar/h5blue/h5blue.json']={"usingComponents":{}};
__wxAppCode__['pages/tabBar/h5blue/h5blue.wxml']=$gwx('./pages/tabBar/h5blue/h5blue.wxml');

__wxAppCode__['pages/tabBar/plush5/plush5.json']={"usingComponents":{}};
__wxAppCode__['pages/tabBar/plush5/plush5.wxml']=$gwx('./pages/tabBar/plush5/plush5.wxml');

__wxAppCode__['pages/tabBar/uni-blue/uni-blue.json']={"navigationBarTitleText":"uni blue api","usingComponents":{}};
__wxAppCode__['pages/tabBar/uni-blue/uni-blue.wxml']=$gwx('./pages/tabBar/uni-blue/uni-blue.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"1dfd":function(n,t,o){"use strict";o.r(t);var e=o("3c02");for(var u in e)"default"!==u&&function(n){o.d(t,n,function(){return e[n]})}(u);o("6656");var a,i,c=o("2877"),s=Object(c["a"])(e["default"],a,i,!1,null,null,null);t["default"]=s.exports},"3c02":function(n,t,o){"use strict";o.r(t);var e=o("7fb7"),u=o.n(e);for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);t["default"]=u.a},"5bad":function(n,t,o){},6656:function(n,t,o){"use strict";var e=o("5bad"),u=o.n(e);u.a},"7fb7":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(){console.log("App Launch"," at App.vue:4"),plus.screen.lockOrientation("portrait-primary"),n.request({url:"https://uniapp.dcloud.io/update",data:{appid:plus.runtime.appid,version:plus.runtime.version,imei:plus.device.imei},success:function(t){if(console.log("success",t," at App.vue:17"),200==t.statusCode&&t.data.isUpdate){var o="iOS"===plus.os.name?t.data.iOS:t.data.Android;n.showModal({title:"更新提示",content:t.data.note?t.data.note:"是否选择更新",success:function(n){n.confirm&&plus.runtime.openURL(o)}})}}})},onShow:function(){console.log("App Show"," at App.vue:36")},onHide:function(){console.log("App Hide"," at App.vue:39")}};t.default=o}).call(this,o("6e42")["default"])}},[["64b4","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0a5f":function(t,e,n){"use strict";(function(t){n("737a");r(n("66fd"));var e=r(n("c0f2"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},1930:function(t,e,n){"use strict";(function(t){n("737a");r(n("66fd"));var e=r(n("9e33"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"2a37":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a")),o=a(n("66fd")),i=a(n("2f62"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){s(i,r,o,a,c,"next",t)}function c(t){s(i,r,o,a,c,"throw",t)}a(void 0)})}}o.default.use(i.default);var u=new i.default.Store({state:{hasLogin:!1,loginProvider:"",openid:null},mutations:{login:function(t,e){t.hasLogin=!0,t.loginProvider=e},logout:function(t){t.hasLogin=!1,t.openid=null},setOpenid:function(t,e){t.openid=e}},actions:{getUserOpenId:function(){var e=c(r.default.mark(function e(n){var o,i;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=n.commit,i=n.state,e.next=3,new Promise(function(e,n){i.openid?e(i.openid):t.login({success:function(t){o("login"),setTimeout(function(){var t="123456789";console.log("uni.request mock openid["+t+"]"," at store\\index.js:40"),o("setOpenid",t),e(t)},1e3)},fail:function(t){console.log("uni.login 接口调用失败，将无法正常使用开放接口等服务",t," at store\\index.js:46"),n(t)}})});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}()}}),l=u;e.default=l}).call(this,n("6e42")["default"])},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return h}),n.d(e,"install",function(){return x}),n.d(e,"mapState",function(){return T}),n.d(e,"mapMutations",function(){return C}),n.d(e,"mapGetters",function(){return j}),n.d(e,"mapActions",function(){return D}),n.d(e,"createNamespacedHelpers",function(){return P});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},l={namespaced:{configurable:!0}};l.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,l);var f=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;p(t.concat(r),e.getChild(r),n.modules[r])}}f.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},f.prototype.update=function(t){p([],this.root,t)},f.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new u(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var d;var h=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!==typeof window&&window.Vue&&x(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d;var a=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=r,m(this,o,[],this._modules.root),g(this,o),n.forEach(function(t){return t(e)}),d.config.devtools&&i(this)},v={state:{configurable:!0}};function y(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),g(t,n,e)}function g(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:i}),d.config.silent=s,t.strict&&E(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),d.nextTick(function(){return r.$destroy()}))}function m(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=S(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){d.set(s,c,r.state)})}var u=r.context=b(t,a,n);r.forEachMutation(function(e,n){var r=a+n;$(t,r,e,u)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;O(t,r,o,u)}),r.forEachGetter(function(e,n){var r=a+n;A(t,r,e,u)}),r.forEachChild(function(r,i){m(t,e,n.concat(i),r,o)})}function b(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=k(n,r,o),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,o){var i=k(n,r,o),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return w(t,e)}},state:{get:function(){return S(t.state,n)}}}),o}function w(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function $(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function O(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function E(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function S(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function k(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function x(t){d&&t===d||(d=t,r(d))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},h.prototype.commit=function(t,e,n){var r=this,o=k(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},h.prototype.dispatch=function(t,e){var n=this,r=k(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},h.prototype.subscribe=function(t){return y(t,this._subscribers)},h.prototype.subscribeAction=function(t){return y(t,this._actionSubscribers)},h.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},h.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},h.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),g(this,this.state)},h.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=S(e.state,t.slice(0,-1));d.delete(n,t[t.length-1])}),_(this)},h.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},h.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(h.prototype,v);var T=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=R(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),C=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=R(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),j=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||R(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),D=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=R(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),P=function(t){return{mapState:T.bind(null,t),mapGetters:j.bind(null,t),mapMutations:C.bind(null,t),mapActions:D.bind(null,t)}};function I(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function N(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function R(t,e,n){var r=t._modulesNamespaceMap[n];return r}var B={Store:h,install:x,version:"3.0.1",mapState:T,mapMutations:C,mapGetters:j,mapActions:D,createNamespacedHelpers:P};e["default"]=B},"3d66":function(t,e,n){"use strict";function r(){var t=plus.android.importClass("android.bluetooth.BluetoothAdapter"),e=plus.android.importClass("android.content.Intent"),n=plus.android.importClass("android.content.IntentFilter"),r=plus.android.importClass("android.bluetooth.BluetoothDevice"),o=plus.android.importClass("java.util.UUID"),i=plus.android.importClass("android.widget.Toast"),a=o.fromString("00001101-0000-1000-8000-00805F9B34FB"),s=plus.android.invoke,c=t.getDefaultAdapter(),u=plus.android.runtimeMainActivity(),l=null,f=null,p=null,d=0,h=null,v=null,y={bluetoothEnable:!1,bluetoothState:"",discoveryDeviceState:!1,readThreadState:!1},_={listenBTStatusCallback:function(t){},discoveryDeviceCallback:function(t){},discoveryFinishedCallback:function(){},readDataCallback:function(t){},connExceptionCallback:function(t){}},g={state:y,init:m,isSupportBluetooth:w,getBluetoothStatus:$,turnOnBluetooth:O,turnOffBluetooth:A,getPairedDevices:E,discoveryNewDevice:S,listenBluetoothStatus:k,connDevice:x,disConnDevice:T,cancelDiscovery:j,readData:D,sendData:P};return window.bluetoothToolInstance?window.bluetoothToolInstance:(window.bluetoothToolInstance=g,g);function m(t){Object.assign(_,t),y.bluetoothEnable=$(),k()}function b(t){i.makeText(u,t,i.LENGTH_SHORT).show()}function w(){return null!=c}function $(){return null!=c&&c.isEnabled()}function O(){if(null!=c)if(c.isEnabled())b("蓝牙已经打开");else{if(null==u)return void b("未获取到activity");var n=new e(t.ACTION_REQUEST_ENABLE),r=1;u.startActivityForResult(n,r)}else b("没有蓝牙")}function A(){if(null!=c&&c.isEnabled()&&c.disable(),null!=h){try{u.unregisterReceiver(h)}catch(t){}h=null}y.bluetoothEnable=!1,j(),C(),null!=c&&c.isEnabled()?(c.disable(),b("蓝牙关闭成功")):b("蓝牙已经关闭")}function E(){var t=[],e=null;if(null!=c&&c.isEnabled()?e=c.getBondedDevices():b("蓝牙未开启"),!e)return t;var n=s(e,"iterator");while(s(n,"hasNext")){var r=s(n,"next");t.push({name:s(r,"getName"),address:s(r,"getAddress")})}return t}function S(){if(null!=h){try{u.unregisterReceiver(h)}catch(i){console.error(i," at pages\\tabBar\\h5blue\\BluetoothTool.js:205")}h=null,j()}var e=plus.android.importClass("android.os.Build");e.VERSION.SDK_INT,h=plus.android.implements("io.dcloud.android.content.BroadcastReceiver",{onReceive:function(e,n){plus.android.importClass(e),plus.android.importClass(n);var o=n.getAction();if(r.ACTION_FOUND==o){var i=n.getParcelableExtra(r.EXTRA_DEVICE),a={name:plus.android.invoke(i,"getName"),address:plus.android.invoke(i,"getAddress")};_.discoveryDeviceCallback&&_.discoveryDeviceCallback(a)}t.ACTION_DISCOVERY_FINISHED==o&&(j(),_.discoveryFinishedCallback&&_.discoveryFinishedCallback())}});var o=new n;o.addAction(r.ACTION_FOUND),o.addAction(t.ACTION_DISCOVERY_FINISHED),u.registerReceiver(h,o),c.startDiscovery(),y.discoveryDeviceState=!0}function k(){if(null!=v){try{u.unregisterReceiver(v)}catch(r){console.error(r," at pages\\tabBar\\h5blue\\BluetoothTool.js:254")}v=null}v=plus.android.implements("io.dcloud.android.content.BroadcastReceiver",{onReceive:function(e,n){plus.android.importClass(e),plus.android.importClass(n);var r=n.getAction();switch(r){case t.ACTION_STATE_CHANGED:var o=n.getIntExtra(t.EXTRA_STATE,0),i="";switch(o){case t.STATE_TURNING_ON:i="STATE_TURNING_ON";break;case t.STATE_ON:y.bluetoothEnable=!0,i="STATE_ON";break;case t.STATE_TURNING_OFF:i="STATE_TURNING_OFF";break;case t.STATE_OFF:i="STATE_OFF",y.bluetoothEnable=!1;break}y.bluetoothState=i,_.listenBTStatusCallback&&_.listenBTStatusCallback(i);break}}});var e=new n;e.addAction(t.ACTION_STATE_CHANGED),u.registerReceiver(v,e)}function x(t){plus.android.importClass("java.io.InputStream"),plus.android.importClass("java.io.OutputStream"),plus.android.importClass("android.bluetooth.BluetoothSocket");j(),null!=l&&C(),y.readThreadState=!1;try{var e=s(c,"getRemoteDevice",t);l=s(e,"createRfcommSocketToServiceRecord",a)}catch(n){return console.error(n," at pages\\tabBar\\h5blue\\BluetoothTool.js:316"),b("连接失败，获取Socket失败！"),!1}try{s(l,"connect"),D(),b("连接成功")}catch(n){console.error(n," at pages\\tabBar\\h5blue\\BluetoothTool.js:325"),b("连接失败");try{l.close(),l=null}catch(r){console.error(r," at pages\\tabBar\\h5blue\\BluetoothTool.js:331")}return!1}return!0}function T(){null!=l&&C(),y.readThreadState=!1,b("断开连接成功")}function C(){if(y.readThreadState=!1,l)try{l.close()}catch(t){console.error(t," at pages\\tabBar\\h5blue\\BluetoothTool.js:364"),l=null}}function j(){c.isDiscovering()&&c.cancelDiscovery(),null!=h&&(u.unregisterReceiver(h),h=null),y.discoveryDeviceState=!1}function D(){if(!l)return b("请先连接蓝牙设备！"),!1;try{f=s(l,"getInputStream"),p=s(l,"getOutputStream")}catch(n){return console.error(n," at pages\\tabBar\\h5blue\\BluetoothTool.js:398"),b("创建输入输出流失败！"),C(),!1}var t=0;return e(),y.readThreadState=!0,!0;function e(){clearInterval(d),d=setInterval(function(){if(t++,y.readThreadState){var e=(new Date).getTime();if(t%20==0)try{p.write([0])}catch(n){y.readThreadState=!1,_.connExceptionCallback&&_.connExceptionCallback(n)}var r=[];while(0!==s(f,"available")){var o=s(f,"read");r.push(o);var i=(new Date).getTime();if(i-e>20)break}r.length>0&&_.readDataCallback&&_.readDataCallback(r)}},40)}}function P(t){if(p){var e=s(t,"getBytes","gbk");try{p.write(e)}catch(n){return!1}return!0}b("创建输出流失败！")}}t.exports={BluetoothTool:r}},"48a9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={BluetoothTool:function(){var t=plus.android.importClass("android.bluetooth.BluetoothAdapter"),e=plus.android.importClass("android.content.Intent"),n=plus.android.importClass("android.content.IntentFilter"),r=plus.android.importClass("android.bluetooth.BluetoothDevice"),o=plus.android.importClass("java.util.UUID"),i=plus.android.importClass("android.widget.Toast"),a=o.fromString("00001101-0000-1000-8000-00805F9B34FB"),s=plus.android.invoke,c=t.getDefaultAdapter(),u=plus.android.runtimeMainActivity(),l=null,f=null,p=null,d=0,h=null,v=null,y={bluetoothEnable:!1,bluetoothState:"",discoveryDeviceState:!1,readThreadState:!1},_={listenBTStatusCallback:function(t){},discoveryDeviceCallback:function(t){},discoveryFinishedCallback:function(){},readDataCallback:function(t){},connExceptionCallback:function(t){}},g={state:y,init:m,isSupportBluetooth:w,getBluetoothStatus:$,turnOnBluetooth:O,turnOffBluetooth:A,getPairedDevices:E,discoveryNewDevice:S,listenBluetoothStatus:k,connDevice:x,disConnDevice:T,cancelDiscovery:j,readData:D,sendData:P};return window.bluetoothToolInstance?window.bluetoothToolInstance:(window.bluetoothToolInstance=g,g);function m(t){Object.assign(_,t),y.bluetoothEnable=$(),k()}function b(t){i.makeText(u,t,i.LENGTH_SHORT).show()}function w(){return null!=c}function $(){return null!=c&&c.isEnabled()}function O(){if(null!=c)if(c.isEnabled())b("蓝牙已经打开");else{if(null==u)return void b("未获取到activity");var n=new e(t.ACTION_REQUEST_ENABLE),r=1;u.startActivityForResult(n,r)}else b("没有蓝牙")}function A(){if(null!=c&&c.isEnabled()&&c.disable(),null!=h){try{u.unregisterReceiver(h)}catch(t){}h=null}y.bluetoothEnable=!1,j(),C(),null!=c&&c.isEnabled()?(c.disable(),b("蓝牙关闭成功")):b("蓝牙已经关闭")}function E(){var t=[],e=null;if(null!=c&&c.isEnabled()?e=c.getBondedDevices():b("蓝牙未开启"),!e)return t;var n=s(e,"iterator");while(s(n,"hasNext")){var r=s(n,"next");t.push({name:s(r,"getName"),address:s(r,"getAddress")})}return t}function S(){if(null!=h){try{u.unregisterReceiver(h)}catch(i){console.error(i," at static\\js\\BluetoothTool.js:208")}h=null,j()}var e=plus.android.importClass("android.os.Build");e.VERSION.SDK_INT,h=plus.android.implements("io.dcloud.android.content.BroadcastReceiver",{onReceive:function(e,n){plus.android.importClass(e),plus.android.importClass(n);var o=n.getAction();if(r.ACTION_FOUND==o){var i=n.getParcelableExtra(r.EXTRA_DEVICE),a={name:plus.android.invoke(i,"getName"),address:plus.android.invoke(i,"getAddress")};_.discoveryDeviceCallback&&_.discoveryDeviceCallback(a)}t.ACTION_DISCOVERY_FINISHED==o&&(j(),_.discoveryFinishedCallback&&_.discoveryFinishedCallback())}});var o=new n;o.addAction(r.ACTION_FOUND),o.addAction(t.ACTION_DISCOVERY_FINISHED),u.registerReceiver(h,o),c.startDiscovery(),y.discoveryDeviceState=!0}function k(){if(null!=v){try{u.unregisterReceiver(v)}catch(r){console.error(r," at static\\js\\BluetoothTool.js:257")}v=null}v=plus.android.implements("io.dcloud.android.content.BroadcastReceiver",{onReceive:function(e,n){plus.android.importClass(e),plus.android.importClass(n);var r=n.getAction();switch(r){case t.ACTION_STATE_CHANGED:var o=n.getIntExtra(t.EXTRA_STATE,0),i="";switch(o){case t.STATE_TURNING_ON:i="STATE_TURNING_ON";break;case t.STATE_ON:y.bluetoothEnable=!0,i="STATE_ON";break;case t.STATE_TURNING_OFF:i="STATE_TURNING_OFF";break;case t.STATE_OFF:i="STATE_OFF",y.bluetoothEnable=!1;break}y.bluetoothState=i,_.listenBTStatusCallback&&_.listenBTStatusCallback(i);break}}});var e=new n;e.addAction(t.ACTION_STATE_CHANGED),u.registerReceiver(v,e)}function x(t){plus.android.importClass("java.io.InputStream"),plus.android.importClass("java.io.OutputStream"),plus.android.importClass("android.bluetooth.BluetoothSocket");j(),null!=l&&C(),y.readThreadState=!1;try{var e=s(c,"getRemoteDevice",t);l=s(e,"createRfcommSocketToServiceRecord",a)}catch(n){return console.error(n," at static\\js\\BluetoothTool.js:319"),b("连接失败，获取Socket失败！"),!1}try{s(l,"connect"),D(),b("连接成功")}catch(n){console.error(n," at static\\js\\BluetoothTool.js:328"),b("连接失败");try{l.close(),l=null}catch(r){console.error(r," at static\\js\\BluetoothTool.js:334")}return!1}return!0}function T(){null!=l&&C(),y.readThreadState=!1,b("断开连接成功")}function C(){if(y.readThreadState=!1,l)try{l.close()}catch(t){console.error(t," at static\\js\\BluetoothTool.js:367"),l=null}}function j(){c.isDiscovering()&&c.cancelDiscovery(),null!=h&&(u.unregisterReceiver(h),h=null),y.discoveryDeviceState=!1}function D(){if(!l)return b("请先连接蓝牙设备！"),!1;try{f=s(l,"getInputStream"),p=s(l,"getOutputStream")}catch(n){return console.error(n," at static\\js\\BluetoothTool.js:401"),b("创建输入输出流失败！"),C(),!1}var t=0;return e(),y.readThreadState=!0,!0;function e(){clearInterval(d),d=setInterval(function(){if(t++,y.readThreadState){var e=(new Date).getTime();if(t%20==0)try{p.write([0])}catch(n){y.readThreadState=!1,_.connExceptionCallback&&_.connExceptionCallback(n)}var r=[];while(0!==s(f,"available")){var o=s(f,"read");r.push(o);var i=(new Date).getTime();if(i-e>20)break}r.length>0&&_.readDataCallback&&_.readDataCallback(r)}},40)}}function P(t){if(p){var e=s(t,"getBytes","gbk");try{p.write([27,64]),p.write([29,33,17]),p.write([27,97,1]),p.write(s("优乐农","getBytes","gbk")),p.write(13),p.write([27,64]),p.write([27,97,1]),p.write([29,33,0]),p.write([27,64]),p.write(e)}catch(n){return!1}return!0}b("创建输出流失败！")}}};e.default=r},"64b4":function(t,e,n){"use strict";(function(t){n("737a");var e=i(n("66fd")),r=i(n("1dfd")),o=i(n("2a37"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.config.productionTip=!1,e.default.prototype.$store=o.default,e.default.prototype.$backgroundAudioData={playing:!1,playTime:0,formatedPlayTime:"00:00:00"},r.default.mpType="app";var c=new e.default(a({store:o.default},r.default));t(c).$mount()}).call(this,n("6e42")["createApp"])},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function f(t){return"[object RegExp]"===u.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function h(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,O=w(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),A=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),E=/\B([A-Z])/g,S=w(function(t){return t.replace(E,"-$1").toLowerCase()});function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var T=Function.prototype.bind?x:k;function C(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function j(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&j(e,t[n]);return e}function P(t,e,n){}var I=function(t,e,n){return!1},N=function(t){return t};function R(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return R(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return R(t[n],e[n])})}catch(u){return!1}}function B(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var M=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:P,parsePlatformTagName:N,mustUseProp:I,async:!0,_lifecycleHooks:L},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+V.source+".$_\\d]");function W(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,J="__proto__"in{},X="undefined"!==typeof window,q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=q&&WXEnvironment.platform.toLowerCase(),Q=X&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Y),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(X)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(no){}var ot=function(){return void 0===K&&(K=!X&&!q&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},it=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ct="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=P,lt=0,ft=function(){this.id=lt++,this.subs=[]};ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){g(this.subs,t)},ft.prototype.depend=function(){ft.target&&ft.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.target=null;var pt=[];function dt(t){pt.push(t),ft.target=t}function ht(){pt.pop(),ft.target=pt[pt.length-1]}var vt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},yt={child:{configurable:!0}};yt.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,yt);var _t=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function gt(t){return new vt(void 0,void 0,void 0,String(t))}function mt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var bt=Array.prototype,wt=Object.create(bt),$t=["push","pop","shift","unshift","splice","sort","reverse"];$t.forEach(function(t){var e=bt[t];H(wt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var Ot=Object.getOwnPropertyNames(wt),At=!0;function Et(t){At=t}var St=function(t){this.value=t,this.dep=new ft,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(J?kt(t,wt):xt(t,wt,Ot),this.observeArray(t)):this.walk(t)};function kt(t,e){t.__proto__=e}function xt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function Tt(t,e){var n;if(c(t)&&!(t instanceof vt))return b(t,"__ob__")&&t.__ob__ instanceof St?n=t.__ob__:At&&!ot()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new St(t)),e&&n&&n.vmCount++,n}function Ct(t,e,n,r,o){var i=new ft,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=t[e]);var u=!o&&Tt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ft.target&&(i.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Pt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!c||(c?c.call(t,e):n=e,u=!o&&Tt(e),i.notify())}})}}function jt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Ct(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Dt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Pt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Pt(e)}St.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Ct(t,e[n])},St.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Tt(t[e])};var It=U.optionMergeStrategies;function Nt(t,e){if(!e)return t;for(var n,r,o,i=ct?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&l(r)&&l(o)&&Nt(r,o):jt(t,n,o));return t}function Rt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Nt(r,o):o}:e?t?function(){return Nt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Bt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Ft(n):n}function Ft(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Mt(t,e,n,r){var o=Object.create(t||null);return e?j(o,e):o}It.data=function(t,e,n){return n?Rt(t,e,n):e&&"function"!==typeof e?t:Rt(t,e)},L.forEach(function(t){It[t]=Bt}),M.forEach(function(t){It[t+"s"]=Mt}),It.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in j(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},It.props=It.methods=It.inject=It.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return j(o,t),e&&j(o,e),o},It.provide=Rt;var Lt=function(t,e){return void 0===e?t:e};function Ut(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=O(o),a[i]={type:null})}else if(l(n))for(var s in n)o=n[s],i=O(s),a[i]=l(o)?o:{type:o};else 0;t.props=a}}function Vt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(l(n))for(var i in n){var a=n[i];r[i]=l(a)?j({from:i},a):{from:a}}else 0}}function Gt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),Ut(e,n),Vt(e,n),Gt(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Ht(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=It[r]||Lt;a[r]=o(t[r],e[r],n,r)}return a}function zt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=O(n);if(b(o,i))return o[i];var a=A(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Wt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=qt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===S(t)){var c=qt(String,o.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=Kt(r,o,t);var u=At;Et(!0),Tt(a),Et(u)}return a}function Kt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Jt(e.type)?r.call(t):r}}function Jt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xt(t,e){return Jt(t)===Jt(e)}function qt(t,e){if(!Array.isArray(e))return Xt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Xt(e[n],t))return n;return-1}function Yt(t,e,n){dt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(no){Zt(no,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{ht()}}function Qt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&d(i)&&!i._handled&&(i.catch(function(t){return Yt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(no){Yt(no,r,o)}return i}function Zt(t,e,n){if(U.errorHandler)try{return U.errorHandler.call(null,t,e,n)}catch(no){no!==t&&te(no,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!X&&!q||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],re=!1;function oe(){re=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();ee=function(){ie.then(oe),et&&setTimeout(P)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(oe)}:function(){setTimeout(oe,0)};else{var ae=1,se=new MutationObserver(oe),ce=document.createTextNode(String(ae));se.observe(ce,{characterData:!0}),ee=function(){ae=(ae+1)%2,ce.data=String(ae)}}function ue(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(no){Yt(no,e,"nextTick")}else n&&n(e)}),re||(re=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var le=new st;function fe(t){pe(t,le),le.clear()}function pe(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!c(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)pe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)pe(t[r[n]],e)}}}var de=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Qt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Qt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function ve(t,e,n,o,a,s){var c,u,l,f;for(c in t)u=t[c],l=e[c],f=de(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=he(u,s)),i(f.once)&&(u=t[c]=a(f.name,u,f.capture)),n(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(f=de(c),o(f.name,e[c],f.capture))}function ye(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,c=t.props;if(o(s)||o(c))for(var u in i){var l=S(u);_e(a,c,u,l,!0)||_e(a,s,u,l,!1)}return a}}function _e(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ge(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[gt(t)]:Array.isArray(t)?we(t):void 0}function be(t){return o(t)&&o(t.text)&&a(t.isComment)}function we(t,e){var n,a,c,u,l=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(c=l.length-1,u=l[c],Array.isArray(a)?a.length>0&&(a=we(a,(e||"")+"_"+n),be(a[0])&&be(u)&&(l[c]=gt(u.text+a[0].text),a.shift()),l.push.apply(l,a)):s(a)?be(u)?l[c]=gt(u.text+a):""!==a&&l.push(gt(a)):be(a)&&be(u)?l[c]=gt(u.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),l.push(a)));return l}function $e(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=Ae(t.$options.inject,t);e&&(Et(!1),Object.keys(e).forEach(function(n){Ct(t,n,e[n])}),Et(!0))}function Ae(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var c=t[i].default;n[i]="function"===typeof c?c.call(e):c}else 0}}return n}}function Ee(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(i);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var u in n)n[u].every(Se)&&delete n[u];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var c in o={},t)t[c]&&"$"!==c[0]&&(o[c]=xe(e,c,t[c]))}else o={};for(var u in e)u in o||(o[u]=Te(e,u));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",a),H(o,"$key",s),H(o,"$hasNormal",i),o}function xe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Te(t,e){return function(){return t[e]}}function Ce(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function je(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=j(j({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function De(t){return zt(this.$options,"filters",t,!0)||N}function Pe(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,o){var i=U.keyCodes[e]||n;return o&&r&&!U.keyCodes[e]?Pe(o,r):i?Pe(i,t):r?S(r)!==e:void 0}function Ne(t,e,n,r,o){if(n)if(c(n)){var i;Array.isArray(n)&&(n=D(n));var a=function(a){if("class"===a||"style"===a||_(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||U.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=O(a),u=S(a);if(!(c in i)&&!(u in i)&&(i[a]=n[a],o)){var l=t.on||(t.on={});l["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Re(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Fe(r,"__static__"+t,!1),r)}function Be(t,e,n){return Fe(t,"__once__"+e+(n?"_"+n:""),!0),t}function Fe(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Me(t[r],e+"_"+r,n);else Me(t,e,n)}function Me(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Le(t,e){if(e)if(l(e)){var n=t.on=t.on?j({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ue(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ue(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Ve(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ge(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Be,t._n=v,t._s=h,t._l=Ce,t._t=je,t._q=R,t._i=B,t._m=Re,t._f=De,t._k=Ie,t._b=Ne,t._v=gt,t._e=_t,t._u=Ue,t._g=Le,t._d=Ve,t._p=Ge}function ze(t,e,r,o,a){var s,c=this,u=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var l=i(u._compiled),f=!l;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Ae(u.inject,o),this.slots=function(){return c.$slots||ke(t.scopedSlots,c.$slots=Ee(r,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var i=on(s,t,e,n,r,f);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return on(s,t,e,n,r,f)}}function We(t,e,r,i,a){var s=t.options,c={},u=s.props;if(o(u))for(var l in u)c[l]=Wt(l,u,e||n);else o(r.attrs)&&Je(c,r.attrs),o(r.props)&&Je(c,r.props);var f=new ze(r,c,a,i,t),p=s.render.call(null,f._c,f);if(p instanceof vt)return Ke(p,r,f.parent,s,f);if(Array.isArray(p)){for(var d=me(p)||[],h=new Array(d.length),v=0;v<d.length;v++)h[v]=Ke(d[v],r,f.parent,s,f);return h}}function Ke(t,e,n,r,o){var i=mt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Je(t,e){for(var n in e)t[O(n)]=e[n]}He(ze.prototype);var Xe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Xe.prepatch(n,n)}else{var r=t.componentInstance=Qe(t,An);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;xn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Dn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):Cn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?jn(e,!0):e.$destroy())}},qe=Object.keys(Xe);function Ye(t,e,n,a,s){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=vn(l,u),void 0===t))return hn(l,e,n,a,s);e=e||{},dr(t),o(e.model)&&en(t.options,e);var f=ye(e,t,s);if(i(t.options.functional))return We(t,f,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}Ze(e);var h=t.options.name||s,v=new vt("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:p,tag:s,children:a},l);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<qe.length;n++){var r=qe[n],o=e[r],i=Xe[r];o===i||o&&o._merged||(e[r]=o?tn(i,o):i)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var nn=1,rn=2;function on(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=rn),an(t,e,n,r,o)}function an(t,e,n,r,i){if(o(n)&&o(n.__ob__))return _t();if(o(n)&&o(n.is)&&(e=n.is),!e)return _t();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===rn?r=me(r):i===nn&&(r=ge(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||U.getTagNamespace(e),a=U.isReservedTag(e)?new vt(U.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(c=zt(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):Ye(c,n,t,r,e)):a=Ye(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&sn(a,s),o(n)&&cn(n),a):_t()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var c=t.children[a];o(c.tag)&&(r(c.ns)||i(n)&&"svg"!==c.tag)&&sn(c,e,n)}}function cn(t){c(t.style)&&fe(t.style),c(t.class)&&fe(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Ee(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return on(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return on(t,e,n,r,o,!0)};var i=r&&r.data;Ct(t,"$attrs",i&&i.attrs||n,null,!0),Ct(t,"$listeners",e._parentListeners||n,null,!0)}var ln,fn=null;function pn(t){He(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=ke(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(no){Yt(no,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=_t()),t.parent=o,t}}function dn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=_t();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function vn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,u=null,l=null;n.$on("hook:destroyed",function(){return g(a,n)});var f=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},p=F(function(n){t.resolved=dn(n,e),s?a.length=0:f(!0)}),h=F(function(e){o(t.errorComp)&&(t.error=!0,f(!0))}),v=t(p,h);return c(v)&&(d(v)?r(t.resolved)&&v.then(p,h):d(v.component)&&(v.component.then(p,h),o(v.error)&&(t.errorComp=dn(v.error,e)),o(v.loading)&&(t.loadingComp=dn(v.loading,e),0===v.delay?t.loading=!0:u=setTimeout(function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,f(!1))},v.delay||200)),o(v.timeout)&&(l=setTimeout(function(){l=null,r(t.resolved)&&h(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function yn(t){return t.isComment&&t.asyncFactory}function _n(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||yn(n)))return n}}function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&$n(t,e)}function mn(t,e){ln.$on(t,e)}function bn(t,e){ln.$off(t,e)}function wn(t,e){var n=ln;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function $n(t,e,n){ln=t,ve(e,n||{},mn,bn,wn,t),ln=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?C(n):n;for(var r=C(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Qt(n[i],e,r,e,o)}return e}}var An=null;function En(t){var e=An;return An=t,function(){An=e}}function Sn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=En(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Dn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Dn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function xn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(i||t.$options._renderChildren||c);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Et(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var d=f[p],h=t.$options.props;l[d]=Wt(d,h,e,t)}Et(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,$n(t,r,v),u&&(t.$slots=Ee(i,o.context),t.$forceUpdate())}function Tn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Cn(t,e){if(e){if(t._directInactive=!1,Tn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Cn(t.$children[n]);Dn(t,"activated")}}function jn(t,e){if((!e||(t._directInactive=!0,!Tn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)jn(t.$children[n]);Dn(t,"deactivated")}}function Dn(t,e){dt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Qt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Pn=[],In=[],Nn={},Rn=!1,Bn=!1,Fn=0;function Mn(){Fn=Pn.length=In.length=0,Nn={},Rn=Bn=!1}var Ln=Date.now;if(X&&!Z){var Un=window.performance;Un&&"function"===typeof Un.now&&Ln()>document.createEvent("Event").timeStamp&&(Ln=function(){return Un.now()})}function Vn(){var t,e;for(Ln(),Bn=!0,Pn.sort(function(t,e){return t.id-e.id}),Fn=0;Fn<Pn.length;Fn++)t=Pn[Fn],t.before&&t.before(),e=t.id,Nn[e]=null,t.run();var n=In.slice(),r=Pn.slice();Mn(),zn(n),Gn(r),it&&U.devtools&&it.emit("flush")}function Gn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Dn(r,"updated")}}function Hn(t){t._inactive=!1,In.push(t)}function zn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Cn(t[e],!0)}function Wn(t){var e=t.id;if(null==Nn[e]){if(Nn[e]=!0,Bn){var n=Pn.length-1;while(n>Fn&&Pn[n].id>t.id)n--;Pn.splice(n+1,0,t)}else Pn.push(t);Rn||(Rn=!0,ue(Vn))}}var Kn=0,Jn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Kn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};Jn.prototype.get=function(){var t;dt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(no){if(!this.user)throw no;Yt(no,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),ht(),this.cleanupDeps()}return t},Jn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Jn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Jn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Wn(this)},Jn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(no){Yt(no,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Jn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Jn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Jn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Xn={enumerable:!0,configurable:!0,get:P,set:P};function qn(t,e,n){Xn.get=function(){return this[e][n]},Xn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Xn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&ar(t,e.methods),e.data?Zn(t):Tt(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&sr(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||Et(!1);var a=function(i){o.push(i);var a=Wt(i,e,n,t);Ct(r,i,a),i in t||qn(t,"_props",i)};for(var s in e)a(s);Et(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||G(i)||qn(t,"_data",i)}Tt(e,!0)}function tr(t,e){dt();try{return t.call(e,e)}catch(no){return Yt(no,e,"data()"),{}}finally{ht()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Jn(t,a||P,P,er)),o in t||rr(t,o,i)}}function rr(t,e,n){var r=!ot();"function"===typeof n?(Xn.get=r?or(e):ir(n),Xn.set=P):(Xn.get=n.get?r&&!1!==n.cache?or(e):ir(n.get):P,Xn.set=n.set||P),Object.defineProperty(t,e,Xn)}function or(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:T(e[n],t)}function sr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)cr(t,n,r[o]);else cr(t,n,r)}}function cr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=jt,t.prototype.$delete=Dt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return cr(r,t,e,n);n=n||{},n.user=!0;var o=new Jn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Yt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var lr=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=lr++,e._isVue=!0,t&&t._isComponent?pr(e,t):e.$options=Ht(dr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Sn(e),gn(e),un(e),Dn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Oe(e),Yn(e),"mp-toutiao"!==e.mpHost&&$e(e),"mp-toutiao"!==e.mpHost&&Dn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function dr(t){var e=t.options;if(t.super){var n=dr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&j(t.extendOptions,o),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function vr(t){this._init(t)}function yr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=C(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function _r(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function gr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Ht(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&br(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=j({},a.options),o[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)qn(t.prototype,"_props",n)}function br(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function wr(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function $r(t){return t&&(t.Ctor.options.name||t.tag)}function Or(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Ar(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=$r(a.componentOptions);s&&!e(s)&&Er(n,i,r,o)}}}function Er(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,g(n,e)}fr(vr),ur(vr),On(vr),kn(vr),pn(vr);var Sr=[String,RegExp,Array],kr={name:"keep-alive",abstract:!0,props:{include:Sr,exclude:Sr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Er(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Ar(t,function(t){return Or(e,t)})}),this.$watch("exclude",function(e){Ar(t,function(t){return!Or(e,t)})})},render:function(){var t=this.$slots.default,e=_n(t),n=e&&e.componentOptions;if(n){var r=$r(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!Or(i,r))||a&&r&&Or(a,r))return e;var s=this,c=s.cache,u=s.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,g(u,l),u.push(l)):(c[l]=e,u.push(l),this.max&&u.length>parseInt(this.max)&&Er(c,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},xr={KeepAlive:kr};function Tr(t){var e={get:function(){return U}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:j,mergeOptions:Ht,defineReactive:Ct},t.set=jt,t.delete=Dt,t.nextTick=ue,t.observable=function(t){return Tt(t),t},t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,j(t.options.components,xr),yr(t),_r(t),gr(t),wr(t)}Tr(vr),Object.defineProperty(vr.prototype,"$isServer",{get:ot}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:ze}),vr.version="2.6.10";var Cr="[object Array]",jr="[object Object]";function Dr(t,e){var n={};return Pr(t,e),Ir(t,e,"",n),n}function Pr(t,e){if(t!==e){var n=Rr(t),r=Rr(e);if(n==jr&&r==jr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Pr(i,e[o])}}else n==Cr&&r==Cr&&t.length>=e.length&&e.forEach(function(e,n){Pr(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var o=Rr(t),i=Rr(e);if(o==jr)if(i!=jr||Object.keys(t).length<Object.keys(e).length)Nr(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Rr(i),c=Rr(a);if(s!=Cr&&s!=jr)i!=e[o]&&Nr(r,(""==n?"":n+".")+o,i);else if(s==Cr)c!=Cr?Nr(r,(""==n?"":n+".")+o,i):i.length<a.length?Nr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ir(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==jr)if(c!=jr||Object.keys(i).length<Object.keys(a).length)Nr(r,(""==n?"":n+".")+o,i);else for(var u in i)Ir(i[u],a[u],(""==n?"":n+".")+o+"."+u,r)};for(var s in t)a(s)}else o==Cr?i!=Cr?Nr(r,n,t):t.length<e.length?Nr(r,n,t):t.forEach(function(t,o){Ir(t,e[o],n+"["+o+"]",r)}):Nr(r,n,t)}}function Nr(t,e,n){t[e]=n}function Rr(t){return Object.prototype.toString.call(t)}function Br(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Fr(t){return Pn.find(function(e){return t._watcher===e})}function Mr(t,e){if(!t.__next_tick_pending&&!Fr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(no){Yt(no,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Lr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{})),n=e.reduce(function(e,n){return e[n]=t[n],e},Object.create(null));return Object.assign(n,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(n["name"]=t.name,n["value"]=t.value),JSON.parse(JSON.stringify(n))}var Ur=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Lr(this);o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Dr(o,i);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Br(n)})):Br(this)}};function Vr(){}function Gr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Vr),t.$options.render||(t.$options.render=Vr),"mp-toutiao"!==t.mpHost&&Dn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Jn(t,r,P,{before:function(){t._isMounted&&!t._isDestroyed&&Dn(t,"beforeUpdate")}},!0),n=!1,t}function Hr(t,e){return o(t)||o(e)?zr(t,Wr(e)):""}function zr(t,e){return t?e?t+" "+e:t:e||""}function Wr(t){return Array.isArray(t)?Kr(t):c(t)?Jr(t):"string"===typeof t?t:""}function Kr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Wr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Jr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Xr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function qr(t){return Array.isArray(t)?D(t):"string"===typeof t?Xr(t):t}var Yr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Qr(t[r],n.slice(1).join("."))}function Zr(t){var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:C(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Mr(this,t)},Yr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=$e,t.prototype.__init_injections=Oe,t.prototype.__call_hook=function(t,e){var n=this;dt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Qt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return l(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qr(e||this,t)},t.prototype.__get_class=function(t,e){return Hr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=qr(t),r=e?j(e,n):n;return Object.keys(r).map(function(t){return S(t)+":"+r[t]}).join(";")}}var to=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eo(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==to.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;to.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=to}vr.prototype.__patch__=Ur,vr.prototype.$mount=function(t,e){return Gr(this,t,e)},eo(vr),Zr(vr),e["default"]=vr}.call(this,n("c8ba"))},"6c31":function(t,e,n){"use strict";(function(t){n("737a");r(n("66fd"));var e=r(n("0437"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=Gt,e.createPage=Qt,e.createComponent=Zt,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return c(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){o=!0,i=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=Object.prototype.toString,f=Object.prototype.hasOwnProperty;function p(t){return"function"===typeof t}function d(t){return"string"===typeof t}function h(t){return"[object Object]"===l.call(t)}function v(t,e){return f.call(t,e)}function y(){}function _(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var g=/-(\w)/g,m=_(function(t){return t.replace(g,function(t,e){return e?e.toUpperCase():""})}),b=/^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,w=/^create|Manager$/,$=/^on/;function O(t){return w.test(t)}function A(t){return b.test(t)}function E(t){return $.test(t)}function S(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function k(t){return!(O(t)||A(t)||E(t))}function x(t,e){return k(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return p(t.success)||p(t.fail)||p(t.complete)?e.apply(void 0,[t].concat(r)):S(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})}))}:e}var T=1e-4,C=750,j=!1,D=0,P=0;function I(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;D=r,P=n,j="ios"===e}function N(t,e){if(0===D&&I(),t=Number(t),0===t)return 0;var n=t/C*(e||D);return n<0&&(n=-n),n=Math.floor(n+T),0===n?1!==P&&j?.5:1:t<0?-n:n}var R={},B=[],F=[],M=["success","fail","cancel","complete"];function L(t,e,n){return function(r){return e(V(t,r,n))}}function U(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(h(e)){var i=!0===o?e:{};for(var a in p(n)&&(n=n(e,i)||{}),e)if(v(n,a)){var s=n[a];p(s)&&(s=s(e[a],e,i)),s?d(s)?i[s]=e[a]:h(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==M.indexOf(a)?i[a]=L(t,e[a],r):o||(i[a]=e[a]);return i}return p(e)&&(e=L(t,e,r)),e}function V(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return p(R.returnValue)&&(e=R.returnValue(t,e)),U(t,e,n,{},r)}function G(t,e){if(v(R,t)){var n=R[t];return n?function(e,r){var o=n;p(n)&&(o=n(e)),e=U(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return A(t)?V(t,a,o.returnValue,O(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var H=Object.create(null),z=["subscribePush","unsubscribePush","onPush","offPush","share"];function W(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};p(n)&&n(o),p(r)&&r(o)}}z.forEach(function(t){H[t]=W(t)});var K=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function J(t,e,n){return t[e].apply(t,n)}function X(){return J(K(),"$on",Array.prototype.slice.call(arguments))}function q(){return J(K(),"$off",Array.prototype.slice.call(arguments))}function Y(){return J(K(),"$once",Array.prototype.slice.call(arguments))}function Q(){return J(K(),"$emit",Array.prototype.slice.call(arguments))}var Z=Object.freeze({$on:X,$off:q,$once:Y,$emit:Q});function tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function et(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&tt(e),e}function nt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var rt=Object.freeze({requireNativePlugin:nt,getSubNVueById:et}),ot=Page,it=Component,at=/:/g,st=_(function(t){return m(t.replace(at,"-"))});function ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[st(n)].concat(o))}}}function ut(t,e){var n=e[t];e[t]=n?function(){ct(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ut("onLoad",t),ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ut("created",t),it(t)};var lt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function ft(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){v(n,e)&&(t[e]=n[e])})}function pt(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)}})}function dt(t,e){var n;return e=e.default||e,p(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function ht(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function yt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return h(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||v(n,t)||(n[t]=r[t])}),n}var _t=[String,Number,Boolean,Object,Array,null];function gt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function mt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]=String,i["value"]=null))}),h(r)&&r.props&&a.push(e({properties:wt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){h(t)&&t.props&&a.push(e({properties:wt(t.props,!0)}))}),a}function bt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function wt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueId={type:String,value:""},r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:gt(t)}}):h(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(h(o)){var i=o["default"];p(i)&&(i=i()),o.type=bt(e,o.type,i,n),r[e]={type:-1!==_t.indexOf(o.type)?o.type:null,value:i,observer:gt(e)}}else{var a=bt(e,o,null,n);r[e]={type:-1!==_t.indexOf(a)?a:null,observer:gt(e)}}}),r}function $t(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=y,t.preventDefault=y,t.target=t.target||{},v(t,"detail")||(t.detail={}),h(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Ot(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):h(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function At(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Ot(t,e)}),r}function Et(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function St(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=At(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Et(t)):"string"===typeof t&&v(s,t)?c.push(s[t]):c.push(t)}),c}var kt="~",xt="^";function Tt(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function Ct(t){var e=this;t=$t(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var r=t.type;n.forEach(function(n){var o=n[0],i=n[1],a=o.charAt(0)===xt;o=a?o.slice(1):o;var s=o.charAt(0)===kt;o=s?o.slice(1):o,i&&Tt(r,o)&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var i=o[r];if(!p(i))throw new Error(" _vm.".concat(r," is not a function"));if(s){if(i.once)return;i.once=!0}i.apply(o,St(e.$vm,t,n[1],n[2],a,r))}})})}var jt=["onShow","onHide","onError","onPageNotFound"];function Dt(t,e){var n=e.mocks,o=e.initRefs;r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),ft(this,n)))}});var i={onLaunch:function(e){this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e)}};return i.globalData=t.$options.globalData||{},pt(i,jt),i}var Pt=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function It(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=It(n[o],e),r)return r}function Nt(t){return Behavior(t)}function Rt(){return!!this.route}function Bt(t){this.triggerEvent("__l",t)}function Ft(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function Mt(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=It(this.$vm,r)),e||(e=this.$vm),o.parent=e}function Lt(t){return Dt(t,{mocks:Pt,initRefs:Ft})}var Ut=["onUniNViewMessage"];function Vt(t){var e=Lt(t);return pt(e,Ut),e}function Gt(t){return App(Vt(t)),t}function Ht(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=dt(r.default,t),s=i(a,2),c=s[0],u=s[1],l={options:{multipleSlots:!0,addGlobalClass:!0},data:yt(u,r.default.prototype),behaviors:mt(u,Nt),properties:wt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};vt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),ht(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:Mt,__e:Ct}};return n?l:[l,c]}function zt(t){return Ht(t,{isPage:Rt,initRelation:Bt})}function Wt(t){var e=zt(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var Kt=["onShow","onHide","onUnload"];function Jt(t,e){var n=e.isPage,r=e.initRelation,o=Wt(t,{isPage:n,initRelation:r});return pt(o.methods,Kt),o.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},o}function Xt(t){return Jt(t,{isPage:Rt,initRelation:Bt})}Kt.push.apply(Kt,lt);var qt=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Yt(t){var e=Xt(t);return pt(e.methods,qt),e}function Qt(t){return Component(Yt(t))}function Zt(t){return Component(Wt(t))}B.forEach(function(t){R[t]=!1}),F.forEach(function(t){var e=R[t]&&R[t].name?R[t].name:t;wx.canIUse(e)||(R[t]=!1)});var te={};"undefined"!==typeof Proxy?te=new Proxy({},{get:function(t,e){return"upx2px"===e?N:rt[e]?x(e,rt[e]):Z[e]?Z[e]:v(wx,e)||v(R,e)?x(e,G(e,wx[e])):void 0}}):(te.upx2px=N,Object.keys(Z).forEach(function(t){te[t]=Z[t]}),Object.keys(rt).forEach(function(t){te[t]=x(t,rt[t])}),Object.keys(wx).forEach(function(t){(v(wx,t)||v(R,t))&&(te[t]=x(t,G(t,wx[t])))})),"undefined"!==typeof t&&(t.UniEmitter=Z),wx.createApp=Gt,wx.createPage=Qt,wx.createComponent=Zt;var ee=te,ne=ee;e.default=ne}).call(this,n("c8ba"))},"737a":function(t,e,n){},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={},y={};y[a]=function(){return this};var _=Object.getPrototypeOf,g=_&&_(_(D([])));g&&g!==r&&o.call(g,a)&&(y=g);var m=A.prototype=$.prototype=Object.create(y);O.prototype=m.constructor=A,A.constructor=O,A[c]=O.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[s]=function(){return this},l.AsyncIterator=S,l.async=function(t,e,n,r){var o=new S(b(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=D,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof $?e:$,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=k(t,n,a),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function $(){}function O(){}function A(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){function e(n,r,i,a){var s=w(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function k(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return P()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=w(t,e,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function x(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,x(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function D(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},a623:function(t,e,n){"use strict";(function(t){n("737a");r(n("66fd"));var e=r(n("6bf7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b1da:function(t,e,n){"use strict";(function(t){n("737a");r(n("66fd"));var e=r(n("4f47"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b2b4:function(t,e,n){"use strict";(function(t){n("737a");r(n("66fd"));var e=r(n("4749"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b5eb:function(t,e,n){"use strict";(function(t){n("737a");r(n("66fd"));var e=r(n("f17c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}}]);
});
define('static/js/BluetoothTool.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * html+ 串口蓝牙操作
 */
var _default = {
  BluetoothTool: function BluetoothTool() {
    var BluetoothAdapter = plus.android.importClass("android.bluetooth.BluetoothAdapter");
    var Intent = plus.android.importClass("android.content.Intent");
    var IntentFilter = plus.android.importClass("android.content.IntentFilter");
    var BluetoothDevice = plus.android.importClass("android.bluetooth.BluetoothDevice");
    var UUID = plus.android.importClass("java.util.UUID");
    var Toast = plus.android.importClass("android.widget.Toast"); //连接串口设备的 UUID

    var MY_UUID = UUID.fromString("00001101-0000-1000-8000-00805F9B34FB");
    var invoke = plus.android.invoke;
    var btAdapter = BluetoothAdapter.getDefaultAdapter();
    var activity = plus.android.runtimeMainActivity();
    var btSocket = null;
    var btInStream = null;
    var btOutStream = null;
    var setIntervalId = 0;
    var btFindReceiver = null; //蓝牙搜索广播接收器

    var btStatusReceiver = null; //蓝牙状态监听广播

    var state = {
      bluetoothEnable: false,
      //蓝牙是否开启
      bluetoothState: "",
      //当前蓝牙状态
      discoveryDeviceState: false,
      //是否正在搜索蓝牙设备
      readThreadState: false //数据读取线程状态

    };
    var options = {
      /**
       * 监听蓝牙状态回调
       * @param {String} state
       */
      listenBTStatusCallback: function listenBTStatusCallback(state) {},

      /**
       * 搜索到新的蓝牙设备回调
       * @param {Device} newDevice
       */
      discoveryDeviceCallback: function discoveryDeviceCallback(newDevice) {},

      /**
       * 蓝牙搜索完成回调
       */
      discoveryFinishedCallback: function discoveryFinishedCallback() {},

      /**
       * 接收到数据回调
       * @param {Array} dataByteArr
       */
      readDataCallback: function readDataCallback(dataByteArr) {},

      /**
       * 蓝牙连接中断回调
       * @param {Exception} e
       */
      connExceptionCallback: function connExceptionCallback(e) {}
    };
    var bluetoothToolInstance = {
      state: state,
      //蓝牙状态
      init: init,
      //初始化回调函数
      isSupportBluetooth: isSupportBluetooth,
      getBluetoothStatus: getBluetoothStatus,
      turnOnBluetooth: turnOnBluetooth,
      turnOffBluetooth: turnOffBluetooth,
      getPairedDevices: getPairedDevices,
      discoveryNewDevice: discoveryNewDevice,
      listenBluetoothStatus: listenBluetoothStatus,
      connDevice: connDevice,
      disConnDevice: disConnDevice,
      cancelDiscovery: cancelDiscovery,
      readData: readData,
      sendData: sendData
    };

    if (window.bluetoothToolInstance) {
      return window.bluetoothToolInstance;
    } else {
      window.bluetoothToolInstance = bluetoothToolInstance;
      return bluetoothToolInstance;
    }

    function init(setOptions) {
      Object.assign(options, setOptions);
      state.bluetoothEnable = getBluetoothStatus();
      listenBluetoothStatus();
    }

    function shortToast(msg) {
      Toast.makeText(activity, msg, Toast.LENGTH_SHORT).show();
    }
    /**
     * 是否支持蓝牙
     * @return {boolean}
     */


    function isSupportBluetooth() {
      if (btAdapter != null) {
        return true;
      }

      return false;
    }
    /**
     * 获取蓝牙的状态
     * @return {boolean} 是否已开启
     */


    function getBluetoothStatus() {
      if (btAdapter != null) {
        return btAdapter.isEnabled();
      }

      return false;
    }
    /**
     * 打开蓝牙
     * @param activity
     * @param requestCode
     */


    function turnOnBluetooth() {
      if (btAdapter == null) {
        shortToast("没有蓝牙");
        return;
      }

      if (!btAdapter.isEnabled()) {
        if (activity == null) {
          shortToast("未获取到activity");
          return;
        } else {
          var intent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
          var requestCode = 1;
          activity.startActivityForResult(intent, requestCode);
          return;
        }
      } else {
        shortToast("蓝牙已经打开");
      }
    }
    /**
     * 关闭蓝牙
     */


    function turnOffBluetooth() {
      if (btAdapter != null && btAdapter.isEnabled()) {
        btAdapter.disable();
      }

      if (btFindReceiver != null) {
        try {
          activity.unregisterReceiver(btFindReceiver);
        } catch (e) {}

        btFindReceiver = null;
      }

      state.bluetoothEnable = false;
      cancelDiscovery();
      closeBtSocket();

      if (btAdapter != null && btAdapter.isEnabled()) {
        btAdapter.disable();
        shortToast("蓝牙关闭成功");
      } else {
        shortToast("蓝牙已经关闭");
      }
    }
    /**
     * 获取已经配对的设备
     * @return {Array} connetedDevices
     */


    function getPairedDevices() {
      var pairedDevices = []; //蓝牙连接android原生对象，是一个set集合

      var pairedDevicesAndroid = null;

      if (btAdapter != null && btAdapter.isEnabled()) {
        pairedDevicesAndroid = btAdapter.getBondedDevices();
      } else {
        shortToast("蓝牙未开启");
      }

      if (!pairedDevicesAndroid) {
        return pairedDevices;
      } //遍历连接设备的set集合，转换为js数组


      var it = invoke(pairedDevicesAndroid, "iterator");

      while (invoke(it, "hasNext")) {
        var device = invoke(it, "next");
        pairedDevices.push({
          "name": invoke(device, "getName"),
          "address": invoke(device, "getAddress")
        });
      }

      return pairedDevices;
    }
    /**
     * 发现设备
     */


    function discoveryNewDevice() {
      if (btFindReceiver != null) {
        try {
          activity.unregisterReceiver(btFindReceiver);
        } catch (e) {
          console.error(e);
        }

        btFindReceiver = null;
        cancelDiscovery();
      }

      var Build = plus.android.importClass("android.os.Build"); //6.0以后的如果需要利用本机查找周围的wifi和蓝牙设备, 申请权限

      if (Build.VERSION.SDK_INT >= 6.0) {}

      btFindReceiver = plus.android.implements("io.dcloud.android.content.BroadcastReceiver", {
        "onReceive": function onReceive(context, intent) {
          plus.android.importClass(context);
          plus.android.importClass(intent);
          var action = intent.getAction();

          if (BluetoothDevice.ACTION_FOUND == action) {
            // 找到设备
            var device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
            var newDevice = {
              "name": plus.android.invoke(device, "getName"),
              "address": plus.android.invoke(device, "getAddress")
            };
            options.discoveryDeviceCallback && options.discoveryDeviceCallback(newDevice);
          }

          if (BluetoothAdapter.ACTION_DISCOVERY_FINISHED == action) {
            // 搜索完成
            cancelDiscovery();
            options.discoveryFinishedCallback && options.discoveryFinishedCallback();
          }
        }
      });
      var filter = new IntentFilter();
      filter.addAction(BluetoothDevice.ACTION_FOUND);
      filter.addAction(BluetoothAdapter.ACTION_DISCOVERY_FINISHED);
      activity.registerReceiver(btFindReceiver, filter);
      btAdapter.startDiscovery(); //开启搜索

      state.discoveryDeviceState = true;
    }
    /**
     * 蓝牙状态监听
     * @param {Activity} activity
     */


    function listenBluetoothStatus() {
      if (btStatusReceiver != null) {
        try {
          activity.unregisterReceiver(btStatusReceiver);
        } catch (e) {
          console.error(e);
        }

        btStatusReceiver = null;
      }

      btStatusReceiver = plus.android.implements("io.dcloud.android.content.BroadcastReceiver", {
        "onReceive": function onReceive(context, intent) {
          plus.android.importClass(context);
          plus.android.importClass(intent);
          var action = intent.getAction();

          switch (action) {
            case BluetoothAdapter.ACTION_STATE_CHANGED:
              var blueState = intent.getIntExtra(BluetoothAdapter.EXTRA_STATE, 0);
              var stateStr = "";

              switch (blueState) {
                case BluetoothAdapter.STATE_TURNING_ON:
                  stateStr = "STATE_TURNING_ON";
                  break;

                case BluetoothAdapter.STATE_ON:
                  state.bluetoothEnable = true;
                  stateStr = "STATE_ON";
                  break;

                case BluetoothAdapter.STATE_TURNING_OFF:
                  stateStr = "STATE_TURNING_OFF";
                  break;

                case BluetoothAdapter.STATE_OFF:
                  stateStr = "STATE_OFF";
                  state.bluetoothEnable = false;
                  break;
              }

              state.bluetoothState = stateStr;
              options.listenBTStatusCallback && options.listenBTStatusCallback(stateStr);
              break;
          }
        }
      });
      var filter = new IntentFilter();
      filter.addAction(BluetoothAdapter.ACTION_STATE_CHANGED);
      activity.registerReceiver(btStatusReceiver, filter);
    }
    /**
     * 根据蓝牙地址，连接设备
     * @param {Stirng} address
     * @return {Boolean}
     */


    function connDevice(address) {
      var InputStream = plus.android.importClass("java.io.InputStream");
      var OutputStream = plus.android.importClass("java.io.OutputStream");
      var BluetoothSocket = plus.android.importClass("android.bluetooth.BluetoothSocket");
      cancelDiscovery();

      if (btSocket != null) {
        closeBtSocket();
      }

      state.readThreadState = false;

      try {
        var device = invoke(btAdapter, "getRemoteDevice", address);
        btSocket = invoke(device, "createRfcommSocketToServiceRecord", MY_UUID);
      } catch (e) {
        console.error(e);
        shortToast("连接失败，获取Socket失败！");
        return false;
      }

      try {
        invoke(btSocket, "connect");
        readData(); //读数据

        shortToast("连接成功");
      } catch (e) {
        console.error(e);
        shortToast("连接失败");

        try {
          btSocket.close();
          btSocket = null;
        } catch (e1) {
          console.error(e1);
        }

        return false;
      }

      return true;
    }
    /**
     * 断开连接设备
     * @param {Object} address
     * @return {Boolean}
     */


    function disConnDevice() {
      if (btSocket != null) {
        closeBtSocket();
      }

      state.readThreadState = false;
      shortToast("断开连接成功");
    }
    /**
     * 断开连接设备
     * @param {Object} address
     * @return {Boolean}
     */


    function closeBtSocket() {
      state.readThreadState = false;

      if (!btSocket) {
        return;
      }

      try {
        btSocket.close();
      } catch (e) {
        console.error(e);
        btSocket = null;
      }
    }
    /**
     * 取消发现
     */


    function cancelDiscovery() {
      if (btAdapter.isDiscovering()) {
        btAdapter.cancelDiscovery();
      }

      if (btFindReceiver != null) {
        activity.unregisterReceiver(btFindReceiver);
        btFindReceiver = null;
      }

      state.discoveryDeviceState = false;
    }
    /**
     * 读取数据
     * @param {Object} activity
     * @param {Function} callback
     * @return {Boolean}
     */


    function readData() {
      if (!btSocket) {
        shortToast("请先连接蓝牙设备！");
        return false;
      }

      try {
        btInStream = invoke(btSocket, "getInputStream");
        btOutStream = invoke(btSocket, "getOutputStream");
      } catch (e) {
        console.error(e);
        shortToast("创建输入输出流失败！");
        closeBtSocket();
        return false;
      }

      var setTimeCount = 0;
      read();
      state.readThreadState = true;
      return true;
      /**
       * 模拟java多线程读取数据
       */

      function read() {
        clearInterval(setIntervalId);
        setIntervalId = setInterval(function () {
          setTimeCount++;

          if (state.readThreadState) {
            var t = new Date().getTime(); //心跳检测

            if (setTimeCount % 20 == 0) {
              try {
                btOutStream.write([0]);
              } catch (e) {
                state.readThreadState = false;
                options.connExceptionCallback && options.connExceptionCallback(e);
              }
            }

            var dataArr = [];

            while (invoke(btInStream, "available") !== 0) {
              var data = invoke(btInStream, "read");
              dataArr.push(data);
              var ct = new Date().getTime();

              if (ct - t > 20) {
                break;
              }
            }

            if (dataArr.length > 0) {
              options.readDataCallback && options.readDataCallback(dataArr);
            }
          }
        }, 40);
      }
    }
    /**
     * 发送数据
     * @param {String} dataStr
     * @return {Boolean}
     */


    function sendData(str) {
      if (!btOutStream) {
        shortToast("创建输出流失败！");
        return;
      } //console.log(str);


      var bytes = invoke(str, 'getBytes', 'gbk');

      try {
        btOutStream.write([0x1B, 0x40]);
        btOutStream.write([0x1d, 0x21, 0x11]); //宽高加倍 //也可以用 0x11 字体相对小
        //			btOutStream.write([0x1b, 0x61, 0x00]);//左边对齐

        btOutStream.write([0x1b, 0x61, 0x01]); //中间对齐
        //			btOutStream.write([0x1b, 0x61, 0x02]);//右边对齐
        //			btOutStream.write([0x1b, 0x45, 0x01]);//加粗

        btOutStream.write(invoke('优乐农', 'getBytes', 'gbk'));
        btOutStream.write(0x0D); //打印加换行

        btOutStream.write([0x1B, 0x40]); //初始化

        btOutStream.write([0x1b, 0x61, 0x01]); //中间对齐

        btOutStream.write([0x1d, 0x21, 0x00]); //宽高加倍

        btOutStream.write([0x1B, 0x40]);
        btOutStream.write(bytes); //btOutStream.write(0x0D);
        //btOutStream.flush();
        //btOutStream.close(); 
        //btOutStream.newLine(); 
      } catch (e) {
        return false;
      }

      return true;
    }
  }
};
exports.default = _default;
});
define('static/js/common.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  //打印小票
  printComponent: {
    //字符个数
    strLen: function strLen(val) {
      var len = 0;

      for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);

        if (a.match(/[^\x00-\xff]/ig) != null) {
          len += 1;
        } else {
          len += 0.5;
        }
      }

      return len;
    },
    //空格
    spacing: function spacing(str) {
      var blank = "";
      var row = Math.ceil(this.strLen(str) / 16); //行数

      var len = (16 * row - this.strLen(str)) * 2;

      for (var i = 0; i < len; i++) {
        blank += ' ';
      }

      console.log((str + blank).length);
      return str + blank;
    },
    //左右对齐
    justify: function justify(str1, str2) {
      var blank = "";
      var len = (16 - this.strLen(str1) - this.strLen(str2)) * 2;

      for (var i = 0; i < len; i++) {
        blank += ' ';
      }

      return str1 + blank + str2;
    },
    //分割线
    newline: function newline() {
      var line = "--------------------------------";
      return line;
    },
    //打印(拣货单)
    print3: function print3(_this) {
      var str = ''; //str+='   —YOULENONG—  ';

      str += this.spacing(' ');
      str += this.spacing('订单号:' + _this.order_no);

      for (var i = 0; i < _this.goodsArr.length; i++) {
        var v = _this.goodsArr[i];
        str += this.spacing(v.goods_name);
        str += this.justify('销价:' + v.goods_price + '/' + v.unit, '购买量:' + v.goods_num);
        str += this.spacing('货号:' + v.product_no); //str+=this.justify('折扣:-xxx','折后:xxx');

        str += this.newline();
      }

      str += this.spacing(new Date().Format('MM-dd hh:mm:ss'));
      str += this.spacing(' ');
      str += this.spacing(' ');
      str += this.spacing(' ');

      _this.bluetoothTool.sendData(str);
    }
  }
};
exports.default = _default;
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/tabBar/component/component';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/component/component.js';

define('pages/tabBar/component/component.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/component/component"],{"9e00":function(e,o,t){"use strict";t.r(o);var n=t("fb89"),c=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(o,e,function(){return n[e]})}(a);o["default"]=c.a},"9e33":function(e,o,t){"use strict";t.r(o);var n=t("aee9"),c=t("9e00");for(var a in c)"default"!==a&&function(e){t.d(o,e,function(){return c[e]})}(a);var s=t("2877"),i=Object(s["a"])(c["default"],n["a"],n["b"],!1,null,null,null);o["default"]=i.exports},aee9:function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement;e._self._c},c=[];t.d(o,"a",function(){return n}),t.d(o,"b",function(){return c})},fb89:function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=e.requireNativePlugin("DCloud-RichAlert"),n={data:function(){return{deviceId:"",devicesList:[],devicesList2:[]}},onShow:function(){e.setNavigationBarTitle({title:"蓝牙测试"})},methods:{testApp:function(){t.show({position:"bottom",title:"提示信息",titleColor:"#FF0000",content:"<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",contentAlign:"left",checkBox:{title:"不再提示",isSelected:!0},buttons:[{title:"取消"},{title:"否"},{title:"确认",titleColor:"#3F51B5"}]},function(e){switch(e.type){case"button":console.log("callback---button--"+e.index," at pages\\tabBar\\component\\component.vue:78");break;case"checkBox":console.log("callback---checkBox--"+e.isSelected," at pages\\tabBar\\component\\component.vue:81");break;case"a":console.log("callback---a--"+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:84");break;case"backCancel":console.log("callback---backCancel--"," at pages\\tabBar\\component\\component.vue:87");break}})},gotoWebView:function(){e.navigateTo({url:"/pages/tabBar/plush5/plush5"})},openBluetoothAdapter:function(){plus.bluetooth.openBluetoothAdapter({success:function(e){console.log("open success: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:102")},fail:function(e){console.log("open failed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:105")}})},getBluetoothState:function(){plus.bluetooth.getBluetoothAdapterState({success:function(e){console.log("state success: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:114")},fail:function(e){console.log("state failed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:117")}})},closeBluetoothAdapter:function(){plus.bluetooth.closeBluetoothAdapter({success:function(e){console.log("close success: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:126")},fail:function(e){console.log("close failed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:129")}})},listenerStateChange:function(){plus.bluetooth.onBluetoothAdapterStateChange(function(e){console.log("state changed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:137")})},startBluetoothDiscovery:function(){plus.bluetooth.openBluetoothAdapter({success:function(e){console.log("open success: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:145"),plus.bluetooth.startBluetoothDevicesDiscovery({success:function(e){console.log("start discovery success: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:148")},fail:function(e){console.log("start discovery failed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:151")}})},fail:function(e){console.log("open failed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:156")}})},listenerDeviceFound:function(){plus.bluetooth.onBluetoothDeviceFound(function(e){var o=e.devices;for(var t in o)console.log(t+": "+JSON.stringify(o[t])," at pages\\tabBar\\component\\component.vue:167")})},getBluetoothDevices:function(){var e=this;plus.bluetooth.getBluetoothDevices({success:function(o){var t=o.devices;for(var n in e.devicesList=t,console.log("get devices success: "+o.length," at pages\\tabBar\\component\\component.vue:178"),t)console.log(n+": "+JSON.stringify(t[n])," at pages\\tabBar\\component\\component.vue:180");e.stopBluetoothDiscovery()},fail:function(e){console.log("get devices failed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:185")}})},stopBluetoothDiscovery:function(){plus.bluetooth.stopBluetoothDevicesDiscovery({success:function(e){console.log("stop discovery success: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:194")},fail:function(e){console.log("stop discovery failed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:197")}})},createConnection:function(e){console.log("开始连接："+e," at pages\\tabBar\\component\\component.vue:203");var o=this;o.deviceId=e,plus.bluetooth.createBLEConnection({deviceId:o.deviceId,success:function(e){console.log("create connection success: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:209")},fail:function(e){console.log("create connection failed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:212")}})},getConnectedDevices:function(){var e=this;plus.bluetooth.getConnectedBluetoothDevices({success:function(o){var t=o.devices;for(var n in e.devicesList2=t,console.log("connected devices success: "+o.length," at pages\\tabBar\\component\\component.vue:223"),t)console.log(n+": "+JSON.stringify(t[n])," at pages\\tabBar\\component\\component.vue:225")},fail:function(e){console.log("connected devices failed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:229")}})},closeConnection:function(){var e=this;plus.bluetooth.closeBLEConnection({deviceId:e.deviceId,success:function(e){console.log("close success: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:239")},fail:function(e){console.log("close failed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:242")}})},listenerConnection:function(){plus.bluetooth.onBLEConnectionStateChange(function(e){console.log("connection state changed: "+JSON.stringify(e)," at pages\\tabBar\\component\\component.vue:250")})}}};o.default=n}).call(this,t("6e42")["default"])}},[["1930","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/component/component.js');
__wxRoute = 'pages/tabBar/blueya/blueya';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/blueya/blueya.js';

define('pages/tabBar/blueya/blueya.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/blueya/blueya"],{1379:function(t,e,a){"use strict";a.r(e);var o=a("24b8"),n=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);e["default"]=n.a},"24b8":function(t,e,a){"use strict";(function(t){var a,o,n,i,s,l,r,u;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d={data:function(){return{bArray:[],no_match_list:[],match_list:[],send_data_onoff:!0,send_data_list:"hello hello print"}},onShow:function(){a=plus.android.runtimeMainActivity(),o=plus.android.importClass("android.content.Context"),a.getSystemService(o.BLUETOOTH_SERVICE),n=plus.android.importClass("android.bluetooth.BluetoothAdapter"),i=n.getDefaultAdapter(),s=plus.android.importClass("android.bluetooth.BluetoothDevice"),l=plus.android.importClass("android.content.IntentFilter")},methods:{print:function(e){console.log(e," at pages\\tabBar\\blueya\\blueya.vue:87");var a=this;t.showLoading({title:"蓝牙连接中..."}),a.print_bluetooth(e)},print_bluetooth:function(e){var a=this;t.hideLoading();var o=plus.android.importClass("java.util.UUID"),n=o.fromString("00001101-0000-1000-8000-00805F9B34FB");u=i.getRemoteDevice(e),plus.android.importClass(u),r=u.createRfcommSocketToServiceRecord(n),plus.android.importClass(r);var s=r.isConnected();if(console.log("islink:"," at pages\\tabBar\\blueya\\blueya.vue:122"),console.log(s," at pages\\tabBar\\blueya\\blueya.vue:123"),t.showToast({title:"准备连接",duration:2e3}),!r.isConnected()){t.showToast({title:"检测到设备未连接，尝试连接....",duration:2e3}),console.log("检测到设备未连接，尝试连接...."," at pages\\tabBar\\blueya\\blueya.vue:133");try{r.connect()}catch(l){return t.showToast({title:"准备出错",duration:2e3}),void console.log("连接出错"," at pages\\tabBar\\blueya\\blueya.vue:141")}}t.showToast({title:"连接成功",duration:2e3}),console.log("设备已连接"," at pages\\tabBar\\blueya\\blueya.vue:149"),a.send_data_onoff=!0},send_data:function(){var e=this;if(console.log(" at pages\\tabBar\\blueya\\blueya.vue:157"),r.isConnected()){t.showToast({title:"已连接，打印",duration:2e3}),console.log("已连接，打印"," at pages\\tabBar\\blueya\\blueya.vue:163");var a=r.getOutputStream();plus.android.importClass(a);var o=e.send_data_list,n=plus.android.invoke(o,"getBytes","uft-8");a.write(n),a.flush(),u=null,r.close()}else t.showToast({title:"未连接，不打印",duration:2e3}),console.log("未连接"," at pages\\tabBar\\blueya\\blueya.vue:177")},open_bluetooth:function(){i.isEnabled()||(i.enable(),t.showToast({title:"蓝牙已启动",duration:2e3}))},close_bluetooth:function(){var e=this;e.no_match_list=[],e.match_list=[],i.isEnabled()&&(i.disable(),t.showToast({title:"蓝牙已关闭",duration:2e3}))},bluetooth_list:function(){var e=this;e.match_list=[];var a=i.getBondedDevices();plus.android.importClass(a);var o=a.iterator();plus.android.importClass(o);while(o.hasNext()){var n=o.next();plus.android.importClass(n);var s={name:n.getName(),SN:n.getAddress()};e.match_list.push(s),t.hideLoading()}},search_bluetooth:function(e){var a=this;i.isEnabled()?void 0!=e.length?t.showModal({title:"提示",content:"是否配对此蓝牙？",success:function(o){o.confirm&&(console.log("用户点击确定"," at pages\\tabBar\\blueya\\blueya.vue:241"),t.showLoading({title:"蓝牙匹配中..."}),a.search_pipei(e))}}):(t.showLoading({title:"蓝牙搜索中..."}),a.search_pipei()):t.showToast({title:"请先打开蓝牙",duration:3e3})},search_pipei:function(e){var o=this;o.bluetooth_list(),o.bArray=[],o.no_match_list=[];var n=new l,r=new s;i.startDiscovery();var u=plus.android.implements("io.dcloud.android.content.BroadcastReceiver",{onReceive:function(n,i){try{if(plus.android.importClass(i),"android.bluetooth.adapter.action.DISCOVERY_FINISHED"==i.getAction())t.hideLoading(),a.unregisterReceiver(u);else{if(r=i.getParcelableExtra(s.EXTRA_DEVICE),e==r.getAddress()&&r.createBond()&&(console.log("配对成功"," at pages\\tabBar\\blueya\\blueya.vue:282"),t.showToast({title:"配对成功",duration:2e3}),t.hideLoading()),null==r)return a.unregisterReceiver(u),t.hideLoading(),void o.bluetooth_list();var l=r.getAddress()+r.getName();if(-1==o.bArray.indexOf(l)){o.bArray.push(l);var d={name:r.getName(),SN:r.getAddress()};o.no_match_list.push(d),console.log(JSON.stringify(o.no_match_list)," at pages\\tabBar\\blueya\\blueya.vue:305")}}}catch(c){console.error(c," at pages\\tabBar\\blueya\\blueya.vue:310")}}});n.addAction(r.ACTION_FOUND),n.addAction(i.ACTION_DISCOVERY_STARTED),n.addAction(i.ACTION_DISCOVERY_FINISHED),n.addAction(i.ACTION_STATE_CHANGED),a.registerReceiver(u,n)}}};e.default=d}).call(this,a("6e42")["default"])},"6bf7":function(t,e,a){"use strict";a.r(e);var o=a("c76a"),n=a("1379");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("9a28");var s=a("2877"),l=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=l.exports},"9a28":function(t,e,a){"use strict";var o=a("b219"),n=a.n(o);n.a},b219:function(t,e,a){},c76a:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})}},[["a623","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/blueya/blueya.js');
__wxRoute = 'pages/tabBar/blueya2/blueya2';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/blueya2/blueya2.js';

define('pages/tabBar/blueya2/blueya2.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/blueya2/blueya2"],{"0437":function(t,e,a){"use strict";a.r(e);var o=a("48ba"),n=a("0ebe");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("7850");var r=a("2877"),s=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,"270b7f8c",null);e["default"]=s.exports},"0ebe":function(t,e,a){"use strict";a.r(e);var o=a("e84d"),n=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);e["default"]=n.a},"48ba":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},7850:function(t,e,a){"use strict";var o=a("c364"),n=a.n(o);n.a},c364:function(t,e,a){},e84d:function(t,e,a){"use strict";(function(t){var a,o,n,i,r,s,l,u;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d={data:function(){return{bArray:[],no_match_list:[],match_list:[],send_data_onoff:!1,send_data_list:""}},onShow:function(){a=plus.android.runtimeMainActivity(),o=plus.android.importClass("android.content.Context"),a.getSystemService(o.BLUETOOTH_SERVICE),n=plus.android.importClass("android.bluetooth.BluetoothAdapter"),i=n.getDefaultAdapter(),r=plus.android.importClass("android.bluetooth.BluetoothDevice"),s=plus.android.importClass("android.content.IntentFilter")},methods:{print:function(e){console.log(e," at pages\\tabBar\\blueya2\\blueya2.vue:88");var a=this;t.showModal({title:"提示",content:"是连接此蓝牙？",success:function(o){o.confirm&&(console.log("用户点击确定"," at pages\\tabBar\\blueya2\\blueya2.vue:95"),t.showLoading({title:"蓝牙连接中..."}),a.print_bluetooth(e))}})},print_bluetooth:function(e){var a=this;t.hideLoading();var o=plus.android.importClass("java.util.UUID"),n=o.fromString("00001101-0000-1000-8000-00805F9B34FB");u=i.getRemoteDevice(e),plus.android.importClass(u),l=u.createInsecureRfcommSocketToServiceRecord(n),plus.android.importClass(l),l.isConnected()||(console.log("检测到设备未连接，尝试连接...."," at pages\\tabBar\\blueya2\\blueya2.vue:116"),l.connect()),console.log("设备已连接"," at pages\\tabBar\\blueya2\\blueya2.vue:119"),a.send_data_onoff=!0},send_data:function(){var t=this;if(console.log(" at pages\\tabBar\\blueya2\\blueya2.vue:127"),l.isConnected()){console.log(22222," at pages\\tabBar\\blueya2\\blueya2.vue:129");var e=l.getOutputStream();plus.android.importClass(e);var a=t.send_data_list,o=plus.android.invoke(a,"getBytes","gbk");e.write(o)}},open_bluetooth:function(){i.isEnabled()||(i.enable(),t.showToast({title:"蓝牙已启动",duration:2e3}))},close_bluetooth:function(){var e=this;e.no_match_list=[],e.match_list=[],i.isEnabled()&&(i.disable(),t.showToast({title:"蓝牙已关闭",duration:2e3}))},bluetooth_list:function(){var t=this;t.match_list=[];var e=i.getBondedDevices();plus.android.importClass(e);var a=e.iterator();plus.android.importClass(a);while(a.hasNext()){var o=a.next();plus.android.importClass(o);var n={name:o.getName(),SN:o.getAddress()};t.match_list.push(n)}},search_bluetooth:function(e){var a=this;i.isEnabled()?void 0!=e.length?t.showModal({title:"提示",content:"是否配对此蓝牙？",success:function(o){o.confirm&&(console.log("用户点击确定"," at pages\\tabBar\\blueya2\\blueya2.vue:200"),t.showLoading({title:"蓝牙匹配中..."}),a.search_pipei(e))}}):(t.showLoading({title:"蓝牙搜索中..."}),a.search_pipei()):t.showToast({title:"请先打开蓝牙",duration:3e3})},search_pipei:function(e){var o=this;o.bluetooth_list(),o.bArray=[],o.no_match_list=[];var n=new s,l=new r;i.startDiscovery();var u=plus.android.implements("io.dcloud.android.content.BroadcastReceiver",{onReceive:function(n,i){try{if(plus.android.importClass(i),"android.bluetooth.adapter.action.DISCOVERY_FINISHED"==i.getAction())t.hideLoading(),a.unregisterReceiver(u);else{if(l=i.getParcelableExtra(r.EXTRA_DEVICE),e==l.getAddress()&&l.createBond()&&(console.log("配对成功"," at pages\\tabBar\\blueya2\\blueya2.vue:240"),t.hideLoading()),null==l)return a.unregisterReceiver(u),t.hideLoading(),void o.bluetooth_list();var s=l.getAddress()+l.getName();if(-1==o.bArray.indexOf(s)){o.bArray.push(s);var d={name:l.getName(),SN:l.getAddress()};o.no_match_list.push(d),console.log(JSON.stringify(o.no_match_list)," at pages\\tabBar\\blueya2\\blueya2.vue:260")}}}catch(c){console.error(c," at pages\\tabBar\\blueya2\\blueya2.vue:265")}}});n.addAction(l.ACTION_FOUND),n.addAction(i.ACTION_DISCOVERY_STARTED),n.addAction(i.ACTION_DISCOVERY_FINISHED),n.addAction(i.ACTION_STATE_CHANGED),a.registerReceiver(u,n)}}};e.default=d}).call(this,a("6e42")["default"])}},[["6c31","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/blueya2/blueya2.js');
__wxRoute = 'pages/tabBar/bluetooth/bluetooth';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/bluetooth/bluetooth.js';

define('pages/tabBar/bluetooth/bluetooth.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/bluetooth/bluetooth"],{7247:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(o("48a9"));function u(t){return t&&t.__esModule?t:{default:t}}var i={name:"bluetooth",components:{},data:function(){return{bluetoothState:{},pairedDevices:[],newDevices:[],receiveDataArr:[],sendData:"",msg:"",bluetoothPop:!1}},created:function(){var t=this,e=function(){t.bluetoothTool=n.default.BluetoothTool(),t.bluetoothState=t.bluetoothTool.state,t.bluetoothTool.init({listenBTStatusCallback:function(e){t.msg="蓝牙状态: "+e},discoveryDeviceCallback:function(e){t.newDevices.push(e)},discoveryFinishedCallback:function(){t.msg="搜索完成"},readDataCallback:function(e){t.receiveDataArr.length>=200&&(t.receiveDataArr=[]),t.receiveDataArr.push.apply(t.receiveDataArr,e)},connExceptionCallback:function(e){console.log(e," at pages\\tabBar\\bluetooth\\bluetooth.vue:110"),t.msg="设备连接失败"}})};document.addEventListener("plusready",e,!1),"undefined"!=typeof plus&&e()},computed:{receiveDataStr:function(){return String.fromCharCode.apply(String,this.receiveDataArr)},bluetoothStatusDesc:function(){return this.bluetoothStatus?"已开启":"已关闭"}},methods:{turnOnBluetooth:function(){this.bluetoothTool.turnOnBluetooth()},turnOffBluetooth:function(){this.bluetoothTool.turnOffBluetooth()},getPairedDevices:function(){this.pairedDevices=this.bluetoothTool.getPairedDevices()},discoveryNewDevice:function(){this.newDevices=[],this.bluetoothTool.discoveryNewDevice()},cancelDiscovery:function(){this.bluetoothTool.cancelDiscovery()},connDevice:function(t){this.bluetoothTool.connDevice(t)},disConnDevice:function(){this.bluetoothTool.disConnDevice()},onSendData:function(t){n.default.BluetoothTool().sendData(t)}}};e.default=i},"905e":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.bluetoothPop=!1})},u=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return u})},c0f2:function(t,e,o){"use strict";o.r(e);var n=o("905e"),u=o("ed30");for(var i in u)"default"!==i&&function(t){o.d(e,t,function(){return u[t]})}(i);var a=o("2877"),c=Object(a["a"])(u["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},ed30:function(t,e,o){"use strict";o.r(e);var n=o("7247"),u=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=u.a}},[["0a5f","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/bluetooth/bluetooth.js');
__wxRoute = 'pages/tabBar/h5blue/h5blue';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/h5blue/h5blue.js';

define('pages/tabBar/h5blue/h5blue.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/h5blue/h5blue"],{"2e80":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(o("3d66"));function u(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{bluetoothState:{},pairedDevices:[],newDevices:[],receiveDataArr:[],sendData:"",msg:""}},computed:{receiveDataStr:function(){return String.fromCharCode.apply(String,this.receiveDataArr)},bluetoothStatusDesc:function(){return this.bluetoothStatus?"已开启":"已关闭"}},created:function(){var e=this;bluetoothTool=n.default.BluetoothTool(),this.bluetoothState=bluetoothTool.state,bluetoothTool.init({listenBTStatusCallback:function(t){e.msg="蓝牙状态: "+t},discoveryDeviceCallback:function(t){e.newDevices.push(t)},discoveryFinishedCallback:function(){e.msg="搜索完成"},readDataCallback:function(t){e.receiveDataArr.length>=200&&(e.receiveDataArr=[]),e.receiveDataArr.push.apply(e.receiveDataArr,t)},connExceptionCallback:function(t){console.log(t," at pages\\tabBar\\h5blue\\h5blue.vue:95"),e.msg="设备连接失败"}})},methods:{turnOnBluetooth:function(){bluetoothTool.turnOnBluetooth()},turnOffBluetooth:function(){bluetoothTool.turnOffBluetooth()},getPairedDevices:function(){this.pairedDevices=bluetoothTool.getPairedDevices()},discoveryNewDevice:function(){this.newDevices=[],bluetoothTool.discoveryNewDevice()},cancelDiscovery:function(){bluetoothTool.cancelDiscovery()},connDevice:function(e){bluetoothTool.connDevice(e)},disConnDevice:function(){bluetoothTool.disConnDevice()},onSendData:function(){bluetoothTool.sendData(this.sendData)}}};t.default=a},eb4f:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.receiveDataArr=[]})},u=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return u})},f17c:function(e,t,o){"use strict";o.r(t);var n=o("eb4f"),u=o("f2db");for(var a in u)"default"!==a&&function(e){o.d(t,e,function(){return u[e]})}(a);var i=o("2877"),c=Object(i["a"])(u["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},f2db:function(e,t,o){"use strict";o.r(t);var n=o("2e80"),u=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=u.a}},[["b5eb","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/h5blue/h5blue.js');
__wxRoute = 'pages/tabBar/plush5/plush5';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/plush5/plush5.js';

define('pages/tabBar/plush5/plush5.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/plush5/plush5"],{"1bf0":function(t,n,e){"use strict";e.r(n);var u=e("591a"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=a.a},4749:function(t,n,e){"use strict";e.r(n);var u=e("86ed"),a=e("1bf0");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);var r=e("2877"),l=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=l.exports},"591a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{url:""}},onShow:function(){this.url="/hybrid/html/blue.html?id=1111"},methods:{getMessage:function(n){t.showModal({content:JSON.stringify(n.detail),showCancel:!1})}}};n.default=e}).call(this,e("6e42")["default"])},"86ed":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})}},[["b2b4","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/plush5/plush5.js');
__wxRoute = 'pages/tabBar/uni-blue/uni-blue';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/uni-blue/uni-blue.js';

define('pages/tabBar/uni-blue/uni-blue.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/uni-blue/uni-blue"],{"0fa2":function(e,t,i){"use strict";i.r(t);var n=i("3b9f"),a=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,function(){return n[e]})}(c);t["default"]=a.a},2249:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"3b9f":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{bds:[],bdsList:[],deviceId:null,deivceValue:"",bconnect:!1,bss:[],bssList:[],serviceId:null,serviceValue:"",bscs:[],characteristicId:null,characteristicValue:"",bscws:[],wcharacteristicId:null,wcharacteristicValue:"",writevalue:"test",state:{available:!1,discovering:!1}}},methods:{openBluetoothAdapter:function(){e.openBluetoothAdapter({success:function(e){console.log(e," at pages\\tabBar\\uni-blue\\uni-blue.vue:71"),that.onBluetoothAdapterStateChange(),that.startBluetoothDevicesDiscovery(),that.onBluetoothDeviceFound(),that.onBLEConnectionStateChange(),that.onBLECharacteristicValueChange()}})},startBluetoothDevicesDiscovery:function(){var t=this;t.resetDevices(),e.startBluetoothDevicesDiscovery({success:function(e){}})},stopBluetoothDevicesDiscovery:function(){e.stopBluetoothDevicesDiscovery({success:function(e){console.log(e," at pages\\tabBar\\uni-blue\\uni-blue.vue:96")}})},onBluetoothDeviceFound:function(){var t=this;e.onBluetoothDeviceFound(function(e){console.log("new device list has founded"," at pages\\tabBar\\uni-blue\\uni-blue.vue:104"),console.dir(e),console.log(t.ab2hex(e[0].advertisData)," at pages\\tabBar\\uni-blue\\uni-blue.vue:106");var i=e,n=[];if(i.map(function(e){e.deviceId&&n.push(e)}),t.bds=n,!t.bconnect&&n.length>0){var a=n[n.length-1].name;(!a||a.length<=0)&&(a=n[n.length-1].deviceId),t.deivceValue=a,t.deviceId=n[n.length-1].deviceId}t.getBluetoothDevices()})},getBluetoothDevices:function(){var t=this;e.getBluetoothDevices({success:function(e){console.log(e," at pages\\tabBar\\uni-blue\\uni-blue.vue:133"),e.devices[0]&&console.log(t.ab2hex(e.devices[0].advertisData)," at pages\\tabBar\\uni-blue\\uni-blue.vue:135"),t.getConnectedBluetoothDevices(),t.stopBluetoothDevicesDiscovery()}})},getConnectedBluetoothDevices:function(){e.getConnectedBluetoothDevices({success:function(e){console.log(e," at pages\\tabBar\\uni-blue\\uni-blue.vue:147")}})},getBluetoothAdapterState:function(){e.getBluetoothAdapterState({success:function(e){console.log(e," at pages\\tabBar\\uni-blue\\uni-blue.vue:155")}})},onBluetoothAdapterStateChange:function(){var t=this;e.onBluetoothAdapterStateChange(function(e){console.log("adapterState changed, now is",e," at pages\\tabBar\\uni-blue\\uni-blue.vue:163"),t.state=e})},onBLEConnectionStateChange:function(){var t=this;e.onBLEConnectionStateChange(function(e){console.log("device ".concat(e.deviceId," state has changed, connected: ").concat(e.connected)," at pages\\tabBar\\uni-blue\\uni-blue.vue:172"),t.deviceId==e.deviceId&&(t.bconnect=e.connected)})},onBLECharacteristicValueChange:function(){var t=this;e.onBLECharacteristicValueChange(function(i){console.log("characteristic ".concat(i.characteristicId," has changed, now is ").concat(i.value)," at pages\\tabBar\\uni-blue\\uni-blue.vue:181"),console.log(t.ab2hex(i.value)," at pages\\tabBar\\uni-blue\\uni-blue.vue:182");var n=t.ab2hex(i.value);t.characteristicId==i.characteristicId?t.readvalueValue=n:t.wcharacteristicId==i.characteristicId&&e.showToast({title:n,icon:"none"})})},openDevice:function(){var t=this,i=t.bds;if(i.length<=0)e.showToast({title:"未搜索到有效蓝牙设备",icon:"none"});else{var n=[];i.map(function(e){var t=e.name;(!t||t.length<=0)&&(t=e.deviceId),n.push({title:t})}),t.bdsList=n}},selectDevice:function(){var t=this,i=t.bds;if(i.length<=0)e.showToast({title:"未搜索到有效蓝牙设备",icon:"none"});else{var n=[];for(var a in i){var c=i[a].name;(!c||c.length<=0)&&(c=i[a].deviceId),n.push({title:c})}plus.nativeUI.actionSheet({title:"选择蓝牙设备",cancel:"取消",buttons:n},function(e){e.index>0&&(t.deivceValue=i[e.index-1].name,t.deviceId=i[e.index-1].deviceId)})}},connectDevice:function(){var t=this,i=t.deviceId;i?e.createBLEConnection({deviceId:i,success:function(t){e.showToast({title:"连接成功",icon:"none"}),console.log("连接成功"," at pages\\tabBar\\uni-blue\\uni-blue.vue:252"),console.log(t," at pages\\tabBar\\uni-blue\\uni-blue.vue:253")}}):e.showToast({title:"未选择设备",icon:"none"})},getServices:function(){var t=this,i=t.deviceId,n=t.bconnect;i?n?(t.resetDevices(!0),console.log("获取蓝牙设备服务"," at pages\\tabBar\\uni-blue\\uni-blue.vue:271"),e.getBLEDeviceServices({deviceId:i,success:function(e){console.log("device services:",e.services," at pages\\tabBar\\uni-blue\\uni-blue.vue:277"),console.log("获取服务成功! "+i.length," at pages\\tabBar\\uni-blue\\uni-blue.vue:278");var i=e.services,n=[];if(i.length>0){for(var a in i)n.push(i[a]);t.bss=n,n.length>0&&(t.serviceValue=t.serviceId=n[n.length-1].uuid)}else console.log("获取服务列表为空?"," at pages\\tabBar\\uni-blue\\uni-blue.vue:290")},fail:function(e){console.log("获取服务失败! "+JSON.stringify(e)," at pages\\tabBar\\uni-blue\\uni-blue.vue:294")}})):e.showToast({title:"未连接蓝牙设备",icon:"none"}):e.showToast({title:"未选择设备",icon:"none"})},openService:function(){var t=this,i=t.bss;if(i.length<=0)e.showToast({title:"未获取到有效蓝牙服务",icon:"none"});else{var n=[];for(var a in i)n.push({title:i[a].uuid});t.bssList=n}},selectService:function(){var t=this,i=t.bss;if(i.length<=0)e.showToast({title:"未获取到有效蓝牙服务",icon:"none"});else{var n=[];for(var a in i)n.push({title:i[a].uuid});plus.nativeUI.actionSheet({title:"选择服务",cancel:"取消",buttons:n},function(e){e.index>0&&(t.serviceValue=t.serviceId=i[e.index-1].uuid)})}},getCharacteristics:function(){var t=this,i=t.deviceId,n=t.bconnect,a=t.serviceId;i?n?a?(t.resetDevices(!0,!0),console.log("获取蓝牙设备某个服务中所有特征值(characteristic):"," at pages\\tabBar\\uni-blue\\uni-blue.vue:357"),e.getBLEDeviceCharacteristics({deviceId:i,serviceId:a,success:function(n){console.log("device getBLEDeviceCharacteristics:",n.characteristics," at pages\\tabBar\\uni-blue\\uni-blue.vue:362");var c=n.characteristics;if(c.length>0){for(var s in c){var o=c[s];if(console.log(JSON.stringify(o)," at pages\\tabBar\\uni-blue\\uni-blue.vue:367"),o.properties&&(o.properties.read&&t.bscs.push(c[s]),o.properties.write&&(t.bscws.push(c[s]),o.properties.notify||o.properties.indicate))){var u=o.uuid;e.notifyBLECharacteristicValueChange({state:!0,deviceId:i,serviceId:a,characteristicId:u,success:function(e){console.log("notifyBLECharacteristicValueChange "+o.uuid+" success."," at pages\\tabBar\\uni-blue\\uni-blue.vue:382")},fail:function(e){console.log("notifyBLECharacteristicValueChange "+o.uuid+" failed! "+JSON.stringify(e)," at pages\\tabBar\\uni-blue\\uni-blue.vue:385")}})}}var l=t.bscs;l.length>0&&(t.characteristicValue=t.characteristicId=l[l.length-1].uuid);var r=t.bscws;r.length>0&&(t.wcharacteristicValue=t.wcharacteristicId=r[r.length-1].uuid)}else console.log("获取特征值列表为空?"," at pages\\tabBar\\uni-blue\\uni-blue.vue:401")}})):e.showToast({title:"未选择服务",icon:"none"}):e.showToast({title:"未连接蓝牙设备",icon:"none"}):e.showToast({title:"未选择设备",icon:"none"})},selectCharacteristic:function(){var t=this,i=t.bscs;if(i.length<=0)e.showToast({title:"未获取到有效可读特征值",icon:"none"});else{var n=[];for(var a in i)n.push({title:i[a].uuid});plus.nativeUI.actionSheet({title:"选择特征值",cancel:"取消",buttons:n},function(e){e.index>0&&(t.characteristicValue=t.characteristicId=i[e.index-1].uuid)})}},readValue:function(){var t=this,i=t.deviceId,n=t.bconnect,a=t.serviceId,c=t.characteristicId;i?n?a?c?e.readBLECharacteristicValue({deviceId:i,serviceId:a,characteristicId:c,success:function(e){console.log("readBLECharacteristicValue:",e.errCode," at pages\\tabBar\\uni-blue\\uni-blue.vue:458")}}):e.showToast({title:"未选择读取的特征值",icon:"none"}):e.showToast({title:"未选择服务",icon:"none"}):e.showToast({title:"未连接蓝牙设备",icon:"none"}):e.showToast({title:"未选择设备",icon:"none"})},selectwCharacteristic:function(){var t=this,i=t.bscws;if(i.length<=0)e.showToast({title:"未获取到有效可写特征值",icon:"none"});else{var n=[];for(var a in i)n.push({title:i[a].uuid});plus.nativeUI.actionSheet({title:"选择特征值",cancel:"取消",buttons:n},function(e){e.index>0&&(t.wcharacteristicValue=t.wcharacteristicId=i[e.index-1].uuid)})}},writeValue:function(){var t=this,i=t.deviceId,n=t.bconnect,a=t.serviceId,c=t.wcharacteristicId,s=t.writevalue;if(i)if(n)if(a)if(c){var o=s;o&&""!=o?t.str2ArrayBuffer(o,function(t){console.log("写入蓝牙设备的特征值数据: "," at pages\\tabBar\\uni-blue\\uni-blue.vue:517");var n=c;e.writeBLECharacteristicValue({deviceId:i,serviceId:a,characteristicId:n,value:t,success:function(e){console.log("写入数据成功!"," at pages\\tabBar\\uni-blue\\uni-blue.vue:525"),console.log("writeBLECharacteristicValue success",e.errMsg," at pages\\tabBar\\uni-blue\\uni-blue.vue:526")}})}):e.showToast({title:"请输入需要写入的数据",icon:"none"})}else e.showToast({title:"未选择写入的特征值",icon:"none"});else e.showToast({title:"未选择服务",icon:"none"});else e.showToast({title:"未连接蓝牙设备",icon:"none"});else e.showToast({title:"未选择设备",icon:"none"})},str2ArrayBuffer:function(e,t){var i=new ArrayBuffer(2),n=new Uint8Array(i);n[0]=98,n[1]=17,t&&t.call(null,i)},resetDevices:function(e,t){var i=this;e||(i.bds=[],i.bdsList=[],i.deviceId=null,i.deivceValue=""),t||(i.bss=[],i.bssList=[],i.serviceId=null,i.serviceValue=""),i.bscs=[],i.bscws=[],i.characteristicId=null,i.wcharacteristicId=null,i.characteristicValue="",i.wcharacteristicValue=""},ab2hex:function(e){var t=Array.prototype.map.call(new Uint8Array(e),function(e){return("00"+e.toString(16)).slice(-2)});return t.join("")},closeBLEConnection:function(){var t=this,i=t.deviceId;i?(t.resetDevices(!0),console.log("断开蓝牙设备连接："," at pages\\tabBar\\uni-blue\\uni-blue.vue:582"),e.closeBLEConnection({deviceId:i,success:function(e){console.log("断开连接成功"," at pages\\tabBar\\uni-blue\\uni-blue.vue:586")}})):e.showToast({title:"未选择设备",icon:"none"})},closeBluetoothAdapter:function(){outSet("关闭蓝牙适配器："),that.resetDevices(),e.closeBluetoothAdapter({success:function(e){console.log("关闭成功"," at pages\\tabBar\\uni-blue\\uni-blue.vue:596")}})}}};t.default=i}).call(this,i("6e42")["default"])},"4f47":function(e,t,i){"use strict";i.r(t);var n=i("2249"),a=i("0fa2");for(var c in a)"default"!==c&&function(e){i.d(t,e,function(){return a[e]})}(c);var s=i("2877"),o=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=o.exports}},[["b1da","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/uni-blue/uni-blue.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

