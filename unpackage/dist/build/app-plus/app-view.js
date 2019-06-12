var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
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
Z([3,'bluetooth-pop ui-pop-layout _div'])
Z([[7],[3,'bluetoothPop']])
Z([3,'ui-pop-center _div'])
Z([3,'ui-pop-content _div'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'turnOnBluetooth']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'mini'])
Z([3,'primary'])
Z([3,'打开蓝牙'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getPairedDevices']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z(z[7])
Z([3,'已配对的设备'])
Z([3,'mt-20 _div'])
Z([3,'蓝牙打印机状态：'])
Z([3,'_pre'])
Z([a,[[2,'?:'],[[6],[[7],[3,'bluetoothState']],[3,'readThreadState']],[1,'已连接'],[1,'未连接']]])
Z(z[14])
Z([3,'已配对的设备：'])
Z([3,'_br'])
Z([3,'_ul'])
Z([3,'__i0__'])
Z([3,'device'])
Z([[7],[3,'pairedDevices']])
Z([3,'_li'])
Z([a,[[2,'+'],[1,'名称：'],[[6],[[7],[3,'device']],[3,'name']]]])
Z(z[20])
Z([a,[[2,'+'],[[2,'+'],[1,'地址：'],[[6],[[7],[3,'device']],[3,'address']]],[1,'']]])
Z(z[20])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'connDevice']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'pairedDevices']],[1,'']],[[7],[3,'__i0__']]],[1,'address']]]]]]]]]]]]]]])
Z(z[6])
Z(z[7])
Z([3,'连接蓝牙'])
Z(z[4])
Z([3,'ui-pop-mask _div'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bluetooth'])
Z([[7],[3,'send_data_onoff']])
Z([3,'send'])
Z([3,'uni-textarea'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'send_data_list']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入发送数据'])
Z([3,'color:#F76260'])
Z([[7],[3,'send_data_list']])
Z(z[4])
Z([3,'fasong'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'send_data']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'发送'])
Z([[2,'!='],[[6],[[7],[3,'no_match_list']],[3,'length']],[1,0]])
Z([3,'no_match_bluetooth_list'])
Z([3,'h1'])
Z([3,'已搜索的蓝牙：'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'no_match_list']])
Z(z[17])
Z(z[4])
Z([3,'uni-list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'search_bluetooth']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'no_match_list']],[1,'']],[[7],[3,'index']]],[1,'SN']]]]]]]]]]]]]]])
Z([3,'uni-list-cell'])
Z([3,'uni-list-cell-hover'])
Z([3,'uni-list-cell-navigate uni-navigate-right uni-media-list '])
Z([3,'uni-media-list-body'])
Z([a,[[2,'+'],[1,'蓝牙名称:'],[[6],[[7],[3,'item']],[3,'name']]]])
Z([a,[[2,'+'],[1,'SN:'],[[6],[[7],[3,'item']],[3,'SN']]]])
Z([[2,'!='],[[6],[[7],[3,'match_list']],[3,'length']],[1,0]])
Z(z[14])
Z(z[15])
Z([3,'已匹配的蓝牙：'])
Z(z[17])
Z(z[18])
Z([[7],[3,'match_list']])
Z(z[17])
Z(z[4])
Z(z[22])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'print']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'match_list']],[1,'']],[[7],[3,'index']]],[1,'SN']]]]]]]]]]]]]]])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z([a,z[29][1]])
Z([3,'btn'])
Z(z[4])
Z([3,'btn_1'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'open_bluetooth']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'打开蓝牙'])
Z(z[4])
Z([3,'btn_2'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close_bluetooth']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'关闭蓝牙'])
Z(z[4])
Z([3,'btn_3'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'search_bluetooth']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'搜索蓝牙'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bluetooth data-v-270b7f8c'])
Z([[7],[3,'send_data_onoff']])
Z([3,'send data-v-270b7f8c'])
Z([3,'uni-textarea data-v-270b7f8c'])
Z([3,'__e'])
Z([3,'data-v-270b7f8c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'send_data_list']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入发送数据'])
Z([3,'color:#F76260'])
Z([[7],[3,'send_data_list']])
Z(z[4])
Z([3,'fasong data-v-270b7f8c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'send_data']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'发送'])
Z([[2,'!='],[[6],[[7],[3,'no_match_list']],[3,'length']],[1,0]])
Z([3,'no_match_bluetooth_list data-v-270b7f8c'])
Z([3,'h1 data-v-270b7f8c'])
Z([3,'已搜索的蓝牙：'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'no_match_list']])
Z(z[18])
Z(z[5])
Z(z[4])
Z([3,'uni-list data-v-270b7f8c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'search_bluetooth']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'no_match_list']],[1,'']],[[7],[3,'index']]],[1,'SN']]]]]]]]]]]]]]])
Z([3,'uni-list-cell data-v-270b7f8c'])
Z([3,'uni-list-cell-hover'])
Z([3,'uni-list-cell-navigate uni-navigate-right uni-media-list  data-v-270b7f8c'])
Z([3,'uni-media-list-body data-v-270b7f8c'])
Z(z[5])
Z([a,[[2,'+'],[1,'蓝牙名称:'],[[6],[[7],[3,'item']],[3,'name']]]])
Z(z[5])
Z([a,[[2,'+'],[1,'SN:'],[[6],[[7],[3,'item']],[3,'SN']]]])
Z([[2,'!='],[[6],[[7],[3,'match_list']],[3,'length']],[1,0]])
Z(z[15])
Z(z[16])
Z([3,'已匹配的蓝牙：'])
Z(z[18])
Z(z[19])
Z([[7],[3,'match_list']])
Z(z[18])
Z(z[5])
Z(z[4])
Z(z[24])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'print']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'match_list']],[1,'']],[[7],[3,'index']]],[1,'SN']]]]]]]]]]]]]]])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[5])
Z([a,z[31][1]])
Z(z[5])
Z([a,z[33][1]])
Z([3,'btn data-v-270b7f8c'])
Z(z[4])
Z([3,'btn_1 data-v-270b7f8c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'open_bluetooth']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'打开蓝牙'])
Z(z[4])
Z([3,'btn_2 data-v-270b7f8c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close_bluetooth']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'关闭蓝牙'])
Z(z[4])
Z([3,'btn_3 data-v-270b7f8c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'search_bluetooth']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'搜索蓝牙'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'testApp']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'mini'])
Z([3,'primary'])
Z([3,'原生插件测试'])
Z([3,'height:20rpx;'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openBluetoothAdapter']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'打开蓝牙模块'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getBluetoothState']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'获取蓝牙状态'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeBluetoothAdapter']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'关闭蓝牙模块'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'listenerStateChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'监听状态变化'])
Z(z[5])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'startBluetoothDiscovery']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'开始搜索蓝牙'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'listenerDeviceFound']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'监听发现新设备'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getBluetoothDevices']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'获取已搜索到的蓝牙设备'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopBluetoothDiscovery']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'结束搜索蓝牙'])
Z(z[5])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'createConnection']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'连接蓝牙设备'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getConnectedDevices']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'获取已连接的蓝牙设备'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeConnection']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'断开蓝牙设备'])
Z(z[5])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'listenerConnection']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'监听连接状态变化'])
Z([3,'搜索到的蓝牙设备'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'devicesList']])
Z(z[70])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'createConnection']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'devicesList']],[1,'']],[[7],[3,'index']]],[1,'deviceId']]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[[6],[[7],[3,'item']],[3,'deviceId']],[1,' ：']],[[6],[[7],[3,'item']],[3,'name']]]])
Z([3,'已连接的蓝牙设备'])
Z(z[70])
Z(z[71])
Z([[7],[3,'devicesList2']])
Z(z[70])
Z([a,z[76][1]])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotoWebView']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z([3,'蓝牙webview'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'turnOnBluetooth']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'mini'])
Z([3,'primary'])
Z([3,'打开蓝牙'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'turnOffBluetooth']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'关闭蓝牙'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getPairedDevices']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'已配对的设备'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'discoveryNewDevice']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'搜索蓝牙设备'])
Z([3,'_div'])
Z([3,'蓝牙状态：'])
Z([3,'_pre'])
Z([a,[[7],[3,'bluetoothState']]])
Z(z[20])
Z([a,[[2,'+'],[[2,'+'],[1,'消息：'],[[7],[3,'msg']]],[1,'']]])
Z(z[20])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'disConnDevice']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'button'])
Z([3,'断开连接'])
Z([3,'已配对的设备：'])
Z([3,'_br'])
Z([3,'_ul'])
Z([3,'__i0__'])
Z([3,'device'])
Z([[7],[3,'pairedDevices']])
Z([3,'_li'])
Z([a,[[2,'+'],[1,'名称：'],[[6],[[7],[3,'device']],[3,'name']]]])
Z(z[32])
Z([a,[[2,'+'],[[2,'+'],[1,'地址：'],[[6],[[7],[3,'device']],[3,'address']]],[1,'']]])
Z(z[32])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'connDevice']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'pairedDevices']],[1,'']],[[7],[3,'__i0__']]],[1,'address']]]]]]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'连接'])
Z([3,'发现的设备：'])
Z(z[32])
Z(z[33])
Z([3,'__i1__'])
Z(z[35])
Z([[7],[3,'newDevices']])
Z(z[37])
Z([a,z[38][1]])
Z(z[32])
Z([a,[[2,'+'],[1,'地址：'],[[6],[[7],[3,'device']],[3,'address']]]])
Z(z[32])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'connDevice']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'newDevices']],[1,'']],[[7],[3,'__i1__']]],[1,'address']]]]]]]]]]]]]]])
Z(z[2])
Z(z[3])
Z(z[46])
Z(z[20])
Z([3,'发送数据：'])
Z(z[0])
Z([3,'20'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'sendData']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'4'])
Z([[7],[3,'sendData']])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onSendData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z([3,'发送'])
Z(z[32])
Z(z[20])
Z([3,'margin-bottom:100px;'])
Z([3,'接收的数据：'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[29])
Z([3,'清空'])
Z(z[20])
Z([3,'width:100%;min-height:50px;'])
Z([3,'byte数组:'])
Z([3,'__i2__'])
Z([3,'data'])
Z([[7],[3,'receiveDataArr']])
Z([3,'_span'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'data']]],[1,'']]])
Z(z[20])
Z([3,'width:100%;min-height:50px;word-wrap:break-word;'])
Z([3,'对应的string字符串:'])
Z(z[32])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'receiveDataStr']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'message']],[[4],[[5],[[4],[[5],[[5],[1,'getMessage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'url']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openBluetoothAdapter']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'初始化蓝牙模块'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'startBluetoothDevicesDiscovery']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'开始搜寻附近的蓝牙外围设备'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopBluetoothDevicesDiscovery']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'停止搜寻附近的蓝牙外围设备'])
Z([a,[[2,'+'],[1,'设备：'],[[7],[3,'deivceValue']]]])
Z([a,[[2,'+'],[1,'设备Id：'],[[7],[3,'deviceId']]]])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'selectDevice']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'选择 设备'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'connectDevice']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'连接蓝牙设备'])
Z([3,'********服务********'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getServices']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'获取设备服务'])
Z([a,[[2,'+'],[1,'服务：'],[[7],[3,'serviceValue']]]])
Z([a,[[2,'+'],[1,'服务Id：'],[[7],[3,'serviceId']]]])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'selectService']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'选择 服务'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getCharacteristics']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'获取服务的特征值'])
Z([a,[[2,'+'],[1,'读取特征值：'],[[7],[3,'characteristicValue']]]])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'selectCharacteristic']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'选择 服务的特征值'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'readValue']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'读取特征值数据'])
Z([a,[[2,'+'],[1,'读取数据：'],[[7],[3,'readvalueValue']]]])
Z([3,'_hr'])
Z([3,'_br'])
Z([a,[[2,'+'],[1,'写入特征值：'],[[7],[3,'wcharacteristicValue']]]])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'selectwCharacteristic']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'选择 写入特征值'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'writeValue']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'写入特征值数据'])
Z([3,'写入数据：'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'writevalue']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入'])
Z([3,'text'])
Z([[7],[3,'writevalue']])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeBLEConnection']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'断开蓝牙设备'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeBluetoothAdapter']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z([3,'关闭蓝牙模块'])
Z([3,'监听蓝牙适配器状态变化事件：'])
Z(z[48])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'蓝牙适配器是否可用：'],[[6],[[7],[3,'state']],[3,'available']]],[1,'\n\t\t蓝牙适配器是否处于搜索状态：']],[[6],[[7],[3,'state']],[3,'discovering']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/tabBar/bluetooth/bluetooth.wxml','./pages/tabBar/blueya/blueya.wxml','./pages/tabBar/blueya2/blueya2.wxml','./pages/tabBar/component/component.wxml','./pages/tabBar/h5blue/h5blue.wxml','./pages/tabBar/plush5/plush5.wxml','./pages/tabBar/uni-blue/uni-blue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'data-show',1],[],e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_mz(z,'button',['bindtap',4,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var cF=_oz(z,8,e,s,gg)
_(fE,cF)
_(oD,fE)
var hG=_mz(z,'button',['bindtap',9,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var oH=_oz(z,13,e,s,gg)
_(hG,oH)
_(oD,hG)
var cI=_n('view')
_rz(z,cI,'class',14,e,s,gg)
var oJ=_oz(z,15,e,s,gg)
_(cI,oJ)
var lK=_n('view')
_rz(z,lK,'class',16,e,s,gg)
var aL=_oz(z,17,e,s,gg)
_(lK,aL)
_(cI,lK)
_(oD,cI)
var tM=_n('view')
_rz(z,tM,'class',18,e,s,gg)
var eN=_oz(z,19,e,s,gg)
_(tM,eN)
var bO=_n('view')
_rz(z,bO,'class',20,e,s,gg)
_(tM,bO)
var oP=_n('view')
_rz(z,oP,'class',21,e,s,gg)
var xQ=_v()
_(oP,xQ)
var oR=function(cT,fS,hU,gg){
var cW=_n('view')
_rz(z,cW,'class',25,cT,fS,gg)
var oX=_oz(z,26,cT,fS,gg)
_(cW,oX)
var lY=_n('view')
_rz(z,lY,'class',27,cT,fS,gg)
_(cW,lY)
var aZ=_oz(z,28,cT,fS,gg)
_(cW,aZ)
var t1=_n('view')
_rz(z,t1,'class',29,cT,fS,gg)
_(cW,t1)
var e2=_mz(z,'button',['bindtap',30,'data-event-opts',1,'size',2,'type',3],[],cT,fS,gg)
var b3=_oz(z,34,cT,fS,gg)
_(e2,b3)
_(cW,e2)
_(hU,cW)
return hU
}
xQ.wxXCkey=2
_2z(z,24,oR,e,s,gg,xQ,'device','__i0__','')
_(tM,oP)
_(oD,tM)
_(xC,oD)
_(oB,xC)
var o4=_mz(z,'view',['bindtap',35,'class',1,'data-event-opts',2],[],e,s,gg)
_(oB,o4)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var o6=_n('view')
_rz(z,o6,'class',0,e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,1,e,s,gg)){f7.wxVkey=1
var o0=_n('view')
_rz(z,o0,'class',2,e,s,gg)
var cAB=_n('view')
_rz(z,cAB,'class',3,e,s,gg)
var oBB=_mz(z,'textarea',['bindinput',4,'data-event-opts',1,'placeholder',2,'placeholderStyle',3,'value',4],[],e,s,gg)
_(cAB,oBB)
var lCB=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var aDB=_oz(z,12,e,s,gg)
_(lCB,aDB)
_(cAB,lCB)
_(o0,cAB)
_(f7,o0)
}
var c8=_v()
_(o6,c8)
if(_oz(z,13,e,s,gg)){c8.wxVkey=1
var tEB=_n('view')
_rz(z,tEB,'class',14,e,s,gg)
var eFB=_n('view')
_rz(z,eFB,'class',15,e,s,gg)
var bGB=_oz(z,16,e,s,gg)
_(eFB,bGB)
_(tEB,eFB)
var oHB=_v()
_(tEB,oHB)
var xIB=function(fKB,oJB,cLB,gg){
var oNB=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],fKB,oJB,gg)
var cOB=_mz(z,'view',['class',24,'hoverClass',1],[],fKB,oJB,gg)
var oPB=_n('view')
_rz(z,oPB,'class',26,fKB,oJB,gg)
var lQB=_n('view')
_rz(z,lQB,'class',27,fKB,oJB,gg)
var aRB=_n('view')
var tSB=_oz(z,28,fKB,oJB,gg)
_(aRB,tSB)
_(lQB,aRB)
var eTB=_n('view')
var bUB=_oz(z,29,fKB,oJB,gg)
_(eTB,bUB)
_(lQB,eTB)
_(oPB,lQB)
_(cOB,oPB)
_(oNB,cOB)
_(cLB,oNB)
return cLB
}
oHB.wxXCkey=2
_2z(z,19,xIB,e,s,gg,oHB,'item','index','index')
_(c8,tEB)
}
var h9=_v()
_(o6,h9)
if(_oz(z,30,e,s,gg)){h9.wxVkey=1
var oVB=_n('view')
_rz(z,oVB,'class',31,e,s,gg)
var xWB=_n('view')
_rz(z,xWB,'class',32,e,s,gg)
var oXB=_oz(z,33,e,s,gg)
_(xWB,oXB)
_(oVB,xWB)
var fYB=_v()
_(oVB,fYB)
var cZB=function(o2B,h1B,c3B,gg){
var l5B=_mz(z,'view',['bindtap',38,'class',1,'data-event-opts',2],[],o2B,h1B,gg)
var a6B=_mz(z,'view',['class',41,'hoverClass',1],[],o2B,h1B,gg)
var t7B=_n('view')
_rz(z,t7B,'class',43,o2B,h1B,gg)
var e8B=_n('view')
_rz(z,e8B,'class',44,o2B,h1B,gg)
var b9B=_n('view')
var o0B=_oz(z,45,o2B,h1B,gg)
_(b9B,o0B)
_(e8B,b9B)
var xAC=_n('view')
var oBC=_oz(z,46,o2B,h1B,gg)
_(xAC,oBC)
_(e8B,xAC)
_(t7B,e8B)
_(a6B,t7B)
_(l5B,a6B)
_(c3B,l5B)
return c3B
}
fYB.wxXCkey=2
_2z(z,36,cZB,e,s,gg,fYB,'item','index','index')
_(h9,oVB)
}
var fCC=_n('view')
_rz(z,fCC,'class',47,e,s,gg)
var cDC=_mz(z,'view',['bindtap',48,'class',1,'data-event-opts',2],[],e,s,gg)
var hEC=_oz(z,51,e,s,gg)
_(cDC,hEC)
_(fCC,cDC)
var oFC=_mz(z,'view',['bindtap',52,'class',1,'data-event-opts',2],[],e,s,gg)
var cGC=_oz(z,55,e,s,gg)
_(oFC,cGC)
_(fCC,oFC)
var oHC=_mz(z,'view',['bindtap',56,'class',1,'data-event-opts',2],[],e,s,gg)
var lIC=_oz(z,59,e,s,gg)
_(oHC,lIC)
_(fCC,oHC)
_(o6,fCC)
f7.wxXCkey=1
c8.wxXCkey=1
h9.wxXCkey=1
_(r,o6)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var tKC=_n('view')
_rz(z,tKC,'class',0,e,s,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,1,e,s,gg)){eLC.wxVkey=1
var xOC=_n('view')
_rz(z,xOC,'class',2,e,s,gg)
var oPC=_n('view')
_rz(z,oPC,'class',3,e,s,gg)
var fQC=_mz(z,'textarea',['bindinput',4,'class',1,'data-event-opts',2,'placeholder',3,'placeholderStyle',4,'value',5],[],e,s,gg)
_(oPC,fQC)
var cRC=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
var hSC=_oz(z,13,e,s,gg)
_(cRC,hSC)
_(oPC,cRC)
_(xOC,oPC)
_(eLC,xOC)
}
var bMC=_v()
_(tKC,bMC)
if(_oz(z,14,e,s,gg)){bMC.wxVkey=1
var oTC=_n('view')
_rz(z,oTC,'class',15,e,s,gg)
var cUC=_n('view')
_rz(z,cUC,'class',16,e,s,gg)
var oVC=_oz(z,17,e,s,gg)
_(cUC,oVC)
_(oTC,cUC)
var lWC=_v()
_(oTC,lWC)
var aXC=function(eZC,tYC,b1C,gg){
var x3C=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2],[],eZC,tYC,gg)
var o4C=_mz(z,'view',['class',26,'hoverClass',1],[],eZC,tYC,gg)
var f5C=_n('view')
_rz(z,f5C,'class',28,eZC,tYC,gg)
var c6C=_n('view')
_rz(z,c6C,'class',29,eZC,tYC,gg)
var h7C=_n('view')
_rz(z,h7C,'class',30,eZC,tYC,gg)
var o8C=_oz(z,31,eZC,tYC,gg)
_(h7C,o8C)
_(c6C,h7C)
var c9C=_n('view')
_rz(z,c9C,'class',32,eZC,tYC,gg)
var o0C=_oz(z,33,eZC,tYC,gg)
_(c9C,o0C)
_(c6C,c9C)
_(f5C,c6C)
_(o4C,f5C)
_(x3C,o4C)
_(b1C,x3C)
return b1C
}
lWC.wxXCkey=2
_2z(z,20,aXC,e,s,gg,lWC,'item','index','index')
_(bMC,oTC)
}
var oNC=_v()
_(tKC,oNC)
if(_oz(z,34,e,s,gg)){oNC.wxVkey=1
var lAD=_n('view')
_rz(z,lAD,'class',35,e,s,gg)
var aBD=_n('view')
_rz(z,aBD,'class',36,e,s,gg)
var tCD=_oz(z,37,e,s,gg)
_(aBD,tCD)
_(lAD,aBD)
var eDD=_v()
_(lAD,eDD)
var bED=function(xGD,oFD,oHD,gg){
var cJD=_mz(z,'view',['bindtap',43,'class',1,'data-event-opts',2],[],xGD,oFD,gg)
var hKD=_mz(z,'view',['class',46,'hoverClass',1],[],xGD,oFD,gg)
var oLD=_n('view')
_rz(z,oLD,'class',48,xGD,oFD,gg)
var cMD=_n('view')
_rz(z,cMD,'class',49,xGD,oFD,gg)
var oND=_n('view')
_rz(z,oND,'class',50,xGD,oFD,gg)
var lOD=_oz(z,51,xGD,oFD,gg)
_(oND,lOD)
_(cMD,oND)
var aPD=_n('view')
_rz(z,aPD,'class',52,xGD,oFD,gg)
var tQD=_oz(z,53,xGD,oFD,gg)
_(aPD,tQD)
_(cMD,aPD)
_(oLD,cMD)
_(hKD,oLD)
_(cJD,hKD)
_(oHD,cJD)
return oHD
}
eDD.wxXCkey=2
_2z(z,40,bED,e,s,gg,eDD,'item','index','index')
_(oNC,lAD)
}
var eRD=_n('view')
_rz(z,eRD,'class',54,e,s,gg)
var bSD=_mz(z,'view',['bindtap',55,'class',1,'data-event-opts',2],[],e,s,gg)
var oTD=_oz(z,58,e,s,gg)
_(bSD,oTD)
_(eRD,bSD)
var xUD=_mz(z,'view',['bindtap',59,'class',1,'data-event-opts',2],[],e,s,gg)
var oVD=_oz(z,62,e,s,gg)
_(xUD,oVD)
_(eRD,xUD)
var fWD=_mz(z,'view',['bindtap',63,'class',1,'data-event-opts',2],[],e,s,gg)
var cXD=_oz(z,66,e,s,gg)
_(fWD,cXD)
_(eRD,fWD)
_(tKC,eRD)
eLC.wxXCkey=1
bMC.wxXCkey=1
oNC.wxXCkey=1
_(r,tKC)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oZD=_n('view')
var c1D=_mz(z,'button',['bindtap',0,'data-event-opts',1,'size',1,'type',2],[],e,s,gg)
var o2D=_oz(z,4,e,s,gg)
_(c1D,o2D)
_(oZD,c1D)
var l3D=_n('view')
_rz(z,l3D,'style',5,e,s,gg)
_(oZD,l3D)
var a4D=_mz(z,'button',['bindtap',6,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var t5D=_oz(z,10,e,s,gg)
_(a4D,t5D)
_(oZD,a4D)
var e6D=_mz(z,'button',['bindtap',11,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var b7D=_oz(z,15,e,s,gg)
_(e6D,b7D)
_(oZD,e6D)
var o8D=_mz(z,'button',['bindtap',16,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var x9D=_oz(z,20,e,s,gg)
_(o8D,x9D)
_(oZD,o8D)
var o0D=_mz(z,'button',['bindtap',21,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var fAE=_oz(z,25,e,s,gg)
_(o0D,fAE)
_(oZD,o0D)
var cBE=_n('view')
_rz(z,cBE,'style',26,e,s,gg)
_(oZD,cBE)
var hCE=_mz(z,'button',['bindtap',27,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var oDE=_oz(z,31,e,s,gg)
_(hCE,oDE)
_(oZD,hCE)
var cEE=_mz(z,'button',['bindtap',32,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var oFE=_oz(z,36,e,s,gg)
_(cEE,oFE)
_(oZD,cEE)
var lGE=_mz(z,'button',['bindtap',37,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var aHE=_oz(z,41,e,s,gg)
_(lGE,aHE)
_(oZD,lGE)
var tIE=_mz(z,'button',['bindtap',42,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var eJE=_oz(z,46,e,s,gg)
_(tIE,eJE)
_(oZD,tIE)
var bKE=_n('view')
_rz(z,bKE,'style',47,e,s,gg)
_(oZD,bKE)
var oLE=_mz(z,'button',['bindtap',48,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var xME=_oz(z,52,e,s,gg)
_(oLE,xME)
_(oZD,oLE)
var oNE=_mz(z,'button',['bindtap',53,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var fOE=_oz(z,57,e,s,gg)
_(oNE,fOE)
_(oZD,oNE)
var cPE=_mz(z,'button',['bindtap',58,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var hQE=_oz(z,62,e,s,gg)
_(cPE,hQE)
_(oZD,cPE)
var oRE=_n('view')
_rz(z,oRE,'style',63,e,s,gg)
_(oZD,oRE)
var cSE=_mz(z,'button',['bindtap',64,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var oTE=_oz(z,68,e,s,gg)
_(cSE,oTE)
_(oZD,cSE)
var lUE=_n('view')
var aVE=_oz(z,69,e,s,gg)
_(lUE,aVE)
_(oZD,lUE)
var tWE=_v()
_(oZD,tWE)
var eXE=function(oZE,bYE,x1E,gg){
var f3E=_mz(z,'view',['bindtap',74,'data-event-opts',1],[],oZE,bYE,gg)
var c4E=_oz(z,76,oZE,bYE,gg)
_(f3E,c4E)
_(x1E,f3E)
return x1E
}
tWE.wxXCkey=2
_2z(z,72,eXE,e,s,gg,tWE,'item','index','index')
var h5E=_n('view')
var o6E=_oz(z,77,e,s,gg)
_(h5E,o6E)
_(oZD,h5E)
var c7E=_v()
_(oZD,c7E)
var o8E=function(a0E,l9E,tAF,gg){
var bCF=_n('view')
var oDF=_oz(z,82,a0E,l9E,gg)
_(bCF,oDF)
_(tAF,bCF)
return tAF
}
c7E.wxXCkey=2
_2z(z,80,o8E,e,s,gg,c7E,'item','index','index')
var xEF=_mz(z,'button',['bindtap',83,'data-event-opts',1,'type',2],[],e,s,gg)
var oFF=_oz(z,86,e,s,gg)
_(xEF,oFF)
_(oZD,xEF)
_(r,oZD)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cHF=_n('view')
var hIF=_mz(z,'button',['bindtap',0,'data-event-opts',1,'size',1,'type',2],[],e,s,gg)
var oJF=_oz(z,4,e,s,gg)
_(hIF,oJF)
_(cHF,hIF)
var cKF=_mz(z,'button',['bindtap',5,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var oLF=_oz(z,9,e,s,gg)
_(cKF,oLF)
_(cHF,cKF)
var lMF=_mz(z,'button',['bindtap',10,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var aNF=_oz(z,14,e,s,gg)
_(lMF,aNF)
_(cHF,lMF)
var tOF=_mz(z,'button',['bindtap',15,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var ePF=_oz(z,19,e,s,gg)
_(tOF,ePF)
_(cHF,tOF)
var bQF=_n('view')
_rz(z,bQF,'class',20,e,s,gg)
var oRF=_oz(z,21,e,s,gg)
_(bQF,oRF)
var xSF=_n('view')
_rz(z,xSF,'class',22,e,s,gg)
var oTF=_oz(z,23,e,s,gg)
_(xSF,oTF)
_(bQF,xSF)
_(cHF,bQF)
var fUF=_n('view')
_rz(z,fUF,'class',24,e,s,gg)
var cVF=_oz(z,25,e,s,gg)
_(fUF,cVF)
_(cHF,fUF)
var hWF=_n('view')
_rz(z,hWF,'class',26,e,s,gg)
var oXF=_mz(z,'input',['bindtap',27,'data-event-opts',1,'type',2,'value',3],[],e,s,gg)
_(hWF,oXF)
_(cHF,hWF)
var cYF=_oz(z,31,e,s,gg)
_(cHF,cYF)
var oZF=_n('view')
_rz(z,oZF,'class',32,e,s,gg)
_(cHF,oZF)
var l1F=_n('view')
_rz(z,l1F,'class',33,e,s,gg)
var a2F=_v()
_(l1F,a2F)
var t3F=function(b5F,e4F,o6F,gg){
var o8F=_n('view')
_rz(z,o8F,'class',37,b5F,e4F,gg)
var f9F=_oz(z,38,b5F,e4F,gg)
_(o8F,f9F)
var c0F=_n('view')
_rz(z,c0F,'class',39,b5F,e4F,gg)
_(o8F,c0F)
var hAG=_oz(z,40,b5F,e4F,gg)
_(o8F,hAG)
var oBG=_n('view')
_rz(z,oBG,'class',41,b5F,e4F,gg)
_(o8F,oBG)
var cCG=_mz(z,'button',['bindtap',42,'data-event-opts',1,'size',2,'type',3],[],b5F,e4F,gg)
var oDG=_oz(z,46,b5F,e4F,gg)
_(cCG,oDG)
_(o8F,cCG)
_(o6F,o8F)
return o6F
}
a2F.wxXCkey=2
_2z(z,36,t3F,e,s,gg,a2F,'device','__i0__','')
_(cHF,l1F)
var lEG=_oz(z,47,e,s,gg)
_(cHF,lEG)
var aFG=_n('view')
_rz(z,aFG,'class',48,e,s,gg)
_(cHF,aFG)
var tGG=_n('view')
_rz(z,tGG,'class',49,e,s,gg)
var eHG=_v()
_(tGG,eHG)
var bIG=function(xKG,oJG,oLG,gg){
var cNG=_n('view')
_rz(z,cNG,'class',53,xKG,oJG,gg)
var hOG=_oz(z,54,xKG,oJG,gg)
_(cNG,hOG)
var oPG=_n('view')
_rz(z,oPG,'class',55,xKG,oJG,gg)
_(cNG,oPG)
var cQG=_oz(z,56,xKG,oJG,gg)
_(cNG,cQG)
var oRG=_n('view')
_rz(z,oRG,'class',57,xKG,oJG,gg)
_(cNG,oRG)
var lSG=_mz(z,'button',['bindtap',58,'data-event-opts',1,'size',2,'type',3],[],xKG,oJG,gg)
var aTG=_oz(z,62,xKG,oJG,gg)
_(lSG,aTG)
_(cNG,lSG)
_(oLG,cNG)
return oLG
}
eHG.wxXCkey=2
_2z(z,52,bIG,e,s,gg,eHG,'device','__i1__','')
_(cHF,tGG)
var tUG=_n('view')
_rz(z,tUG,'class',63,e,s,gg)
var eVG=_oz(z,64,e,s,gg)
_(tUG,eVG)
var bWG=_mz(z,'textarea',['bindinput',65,'cols',1,'data-event-opts',2,'rows',3,'value',4],[],e,s,gg)
_(tUG,bWG)
var oXG=_mz(z,'button',['bindtap',70,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var xYG=_oz(z,74,e,s,gg)
_(oXG,xYG)
_(tUG,oXG)
_(cHF,tUG)
var oZG=_n('view')
_rz(z,oZG,'class',75,e,s,gg)
_(cHF,oZG)
var f1G=_mz(z,'view',['class',76,'style',1],[],e,s,gg)
var c2G=_oz(z,78,e,s,gg)
_(f1G,c2G)
var h3G=_mz(z,'input',['bindtap',79,'data-event-opts',1,'type',2,'value',3],[],e,s,gg)
_(f1G,h3G)
var o4G=_mz(z,'view',['class',83,'style',1],[],e,s,gg)
var c5G=_oz(z,85,e,s,gg)
_(o4G,c5G)
var o6G=_v()
_(o4G,o6G)
var l7G=function(t9G,a8G,e0G,gg){
var oBH=_n('label')
_rz(z,oBH,'class',89,t9G,a8G,gg)
var xCH=_oz(z,90,t9G,a8G,gg)
_(oBH,xCH)
_(e0G,oBH)
return e0G
}
o6G.wxXCkey=2
_2z(z,88,l7G,e,s,gg,o6G,'data','__i2__','')
_(f1G,o4G)
var oDH=_mz(z,'view',['class',91,'style',1],[],e,s,gg)
var fEH=_oz(z,93,e,s,gg)
_(oDH,fEH)
var cFH=_n('view')
_rz(z,cFH,'class',94,e,s,gg)
_(oDH,cFH)
var hGH=_oz(z,95,e,s,gg)
_(oDH,hGH)
_(f1G,oDH)
_(cHF,f1G)
_(r,cHF)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var cIH=_n('view')
var oJH=_mz(z,'web-view',['bindmessage',0,'data-event-opts',1,'src',1],[],e,s,gg)
_(cIH,oJH)
_(r,cIH)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var aLH=_n('view')
var tMH=_mz(z,'button',['bindtap',0,'data-event-opts',1,'type',1],[],e,s,gg)
var eNH=_oz(z,3,e,s,gg)
_(tMH,eNH)
_(aLH,tMH)
var bOH=_mz(z,'button',['bindtap',4,'data-event-opts',1,'type',2],[],e,s,gg)
var oPH=_oz(z,7,e,s,gg)
_(bOH,oPH)
_(aLH,bOH)
var xQH=_mz(z,'button',['bindtap',8,'data-event-opts',1,'type',2],[],e,s,gg)
var oRH=_oz(z,11,e,s,gg)
_(xQH,oRH)
_(aLH,xQH)
var fSH=_n('view')
var cTH=_oz(z,12,e,s,gg)
_(fSH,cTH)
_(aLH,fSH)
var hUH=_n('view')
var oVH=_oz(z,13,e,s,gg)
_(hUH,oVH)
_(aLH,hUH)
var cWH=_mz(z,'button',['bindtap',14,'data-event-opts',1,'type',2],[],e,s,gg)
var oXH=_oz(z,17,e,s,gg)
_(cWH,oXH)
_(aLH,cWH)
var lYH=_mz(z,'button',['bindtap',18,'data-event-opts',1,'type',2],[],e,s,gg)
var aZH=_oz(z,21,e,s,gg)
_(lYH,aZH)
_(aLH,lYH)
var t1H=_n('view')
var e2H=_oz(z,22,e,s,gg)
_(t1H,e2H)
_(aLH,t1H)
var b3H=_mz(z,'button',['bindtap',23,'data-event-opts',1,'type',2],[],e,s,gg)
var o4H=_oz(z,26,e,s,gg)
_(b3H,o4H)
_(aLH,b3H)
var x5H=_n('view')
var o6H=_oz(z,27,e,s,gg)
_(x5H,o6H)
_(aLH,x5H)
var f7H=_n('view')
var c8H=_oz(z,28,e,s,gg)
_(f7H,c8H)
_(aLH,f7H)
var h9H=_mz(z,'button',['bindtap',29,'data-event-opts',1,'type',2],[],e,s,gg)
var o0H=_oz(z,32,e,s,gg)
_(h9H,o0H)
_(aLH,h9H)
var cAI=_mz(z,'button',['bindtap',33,'data-event-opts',1,'type',2],[],e,s,gg)
var oBI=_oz(z,36,e,s,gg)
_(cAI,oBI)
_(aLH,cAI)
var lCI=_n('view')
var aDI=_oz(z,37,e,s,gg)
_(lCI,aDI)
_(aLH,lCI)
var tEI=_mz(z,'button',['bindtap',38,'data-event-opts',1,'type',2],[],e,s,gg)
var eFI=_oz(z,41,e,s,gg)
_(tEI,eFI)
_(aLH,tEI)
var bGI=_mz(z,'button',['bindtap',42,'data-event-opts',1,'type',2],[],e,s,gg)
var oHI=_oz(z,45,e,s,gg)
_(bGI,oHI)
_(aLH,bGI)
var xII=_n('view')
var oJI=_oz(z,46,e,s,gg)
_(xII,oJI)
_(aLH,xII)
var fKI=_n('view')
_rz(z,fKI,'class',47,e,s,gg)
_(aLH,fKI)
var cLI=_n('view')
_rz(z,cLI,'class',48,e,s,gg)
_(aLH,cLI)
var hMI=_n('view')
var oNI=_oz(z,49,e,s,gg)
_(hMI,oNI)
_(aLH,hMI)
var cOI=_mz(z,'button',['bindtap',50,'data-event-opts',1,'type',2],[],e,s,gg)
var oPI=_oz(z,53,e,s,gg)
_(cOI,oPI)
_(aLH,cOI)
var lQI=_mz(z,'button',['bindtap',54,'data-event-opts',1,'type',2],[],e,s,gg)
var aRI=_oz(z,57,e,s,gg)
_(lQI,aRI)
_(aLH,lQI)
var tSI=_n('view')
var eTI=_oz(z,58,e,s,gg)
_(tSI,eTI)
var bUI=_mz(z,'input',['bindinput',59,'data-event-opts',1,'placeholder',2,'type',3,'value',4],[],e,s,gg)
_(tSI,bUI)
_(aLH,tSI)
var oVI=_mz(z,'button',['bindtap',64,'data-event-opts',1,'type',2],[],e,s,gg)
var xWI=_oz(z,67,e,s,gg)
_(oVI,xWI)
_(aLH,oVI)
var oXI=_mz(z,'button',['bindtap',68,'data-event-opts',1,'type',2],[],e,s,gg)
var fYI=_oz(z,71,e,s,gg)
_(oXI,fYI)
_(aLH,oXI)
var cZI=_n('view')
var h1I=_oz(z,72,e,s,gg)
_(cZI,h1I)
var o2I=_n('view')
_rz(z,o2I,'class',73,e,s,gg)
_(cZI,o2I)
var c3I=_oz(z,74,e,s,gg)
_(cZI,c3I)
_(aLH,cZI)
_(r,aLH)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: uniicons; font-weight: normal; font-style: normal; src: url(\x27https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf\x27) format(\x27truetype\x27); }\nwx-view{ font-size:",[0,28],"; line-height:1.8; }\nwx-progress, wx-checkbox-group{ width: 100%; }\nwx-form { width: 100%; }\n.",[1],"uni-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-flex-item { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"uni-row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-column { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-link{ color:#576B95; font-size:",[0,26],"; }\n.",[1],"uni-center{ text-align:center; }\n.",[1],"uni-inline-item{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align:center; -webkit-align-items:center; -ms-flex-align:center; align-items:center; }\n.",[1],"uni-inline-item wx-text{ margin-right: ",[0,20],"; }\n.",[1],"uni-inline-item wx-text:last-child{ margin-right: ",[0,0],"; margin-left: ",[0,20],"; }\n.",[1],"uni-page-head{ padding:",[0,35],"; text-align: center; }\n.",[1],"uni-page-head-title { display: inline-block; padding: 0 ",[0,40],"; font-size: ",[0,30],"; height: ",[0,88],"; line-height: ",[0,88],"; color: #BEBEBE; -webkit-box-sizing: border-box; box-sizing: border-box; border-bottom: ",[0,2]," solid #D8D8D8; }\n.",[1],"uni-page-body { width: 100%; -webkit-box-flex: 1; -webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1; overflow-x: hidden; }\n.",[1],"uni-padding-wrap{ width:",[0,690],"; padding:0 ",[0,30],"; }\n.",[1],"uni-word { text-align: center; padding:",[0,200]," ",[0,100],"; }\n.",[1],"uni-title { font-size:",[0,30],"; font-weight:500; padding:",[0,20]," 0; line-height:1.5; }\n.",[1],"uni-text{ font-size:",[0,28],"; }\n.",[1],"uni-title wx-text{ font-size:",[0,24],"; color:#888; }\n.",[1],"uni-text-gray{ color: #ccc; }\n.",[1],"uni-text-small { font-size:",[0,24],"; }\n.",[1],"uni-common-mb{ margin-bottom:",[0,30],"; }\n.",[1],"uni-common-pb{ padding-bottom:",[0,30],"; }\n.",[1],"uni-common-pl{ padding-left:",[0,30],"; }\n.",[1],"uni-common-mt{ margin-top:",[0,30],"; }\n.",[1],"uni-bg-red{ background:#F76260; color:#FFF; }\n.",[1],"uni-bg-green{ background:#09BB07; color:#FFF; }\n.",[1],"uni-bg-blue{ background:#007AFF; color:#FFF; }\n.",[1],"uni-h1 {font-size: ",[0,80],"; font-weight:700;}\n.",[1],"uni-h2 {font-size: ",[0,60],"; font-weight:700;}\n.",[1],"uni-h3 {font-size: ",[0,48],"; font-weight:700;}\n.",[1],"uni-h4 {font-size: ",[0,36],"; font-weight:700;}\n.",[1],"uni-h5 {font-size: ",[0,28],"; color: #8f8f94;}\n.",[1],"uni-h6 {font-size: ",[0,24],"; color: #8f8f94;}\n.",[1],"uni-bold{font-weight:bold;}\n.",[1],"uni-ellipsis {overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis;}\n.",[1],"uni-btn-v{ padding:",[0,10]," 0; }\n.",[1],"uni-btn-v wx-button{margin:",[0,20]," 0;}\n.",[1],"uni-form-item{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; width:100%; padding:",[0,10]," 0; }\n.",[1],"uni-form-item .",[1],"title{ padding:",[0,10]," ",[0,25],"; }\n.",[1],"uni-label { width: ",[0,210],"; word-wrap: break-word; word-break: break-all; text-indent:",[0,20],"; }\n.",[1],"uni-input { height: ",[0,50],"; padding: ",[0,15]," ",[0,25],"; line-height:",[0,50],"; font-size:",[0,28],"; background:#FFF; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\nwx-radio-group, wx-checkbox-group{ width:100%; }\nwx-radio-group wx-label, wx-checkbox-group wx-label{ padding-right:",[0,20],"; }\n.",[1],"uni-form-item .",[1],"with-fun{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; -webkit-flex-wrap:nowrap; -ms-flex-wrap:nowrap; flex-wrap:nowrap; background:#FFFFFF; }\n.",[1],"uni-form-item .",[1],"with-fun .",[1],"uni-icon{ width:40px; height:",[0,80],"; line-height:",[0,80],"; -webkit-flex-shrink:0; -ms-flex-negative:0; flex-shrink:0; }\n.",[1],"uni-loadmore{ height:",[0,80],"; line-height:",[0,80],"; text-align:center; padding-bottom:",[0,30],"; }\n.",[1],"uni-badge, .",[1],"uni-badge-default { font-family: \x27Helvetica Neue\x27, Helvetica, sans-serif; font-size: 12px; line-height: 1; display: inline-block; padding: 3px 6px; color: #333; -webkit-border-radius: 100px; border-radius: 100px; background-color: rgba(0, 0, 0, .15); }\n.",[1],"uni-badge.",[1],"uni-badge-inverted { padding: 0 5px 0 0; color: #929292; background-color: transparent }\n.",[1],"uni-badge-primary { color: #fff; background-color: #007aff }\n.",[1],"uni-badge-blue.",[1],"uni-badge-inverted, .",[1],"uni-badge-primary.",[1],"uni-badge-inverted { color: #007aff; background-color: transparent }\n.",[1],"uni-badge-green, .",[1],"uni-badge-success { color: #fff; background-color: #4cd964; }\n.",[1],"uni-badge-green.",[1],"uni-badge-inverted, .",[1],"uni-badge-success.",[1],"uni-badge-inverted { color: #4cd964; background-color: transparent }\n.",[1],"uni-badge-warning, .",[1],"uni-badge-yellow { color: #fff; background-color: #f0ad4e }\n.",[1],"uni-badge-warning.",[1],"uni-badge-inverted, .",[1],"uni-badge-yellow.",[1],"uni-badge-inverted { color: #f0ad4e; background-color: transparent }\n.",[1],"uni-badge-danger, .",[1],"uni-badge-red { color: #fff; background-color: #dd524d }\n.",[1],"uni-badge-danger.",[1],"uni-badge-inverted, .",[1],"uni-badge-red.",[1],"uni-badge-inverted { color: #dd524d; background-color: transparent }\n.",[1],"uni-badge-purple, .",[1],"uni-badge-royal { color: #fff; background-color: #8a6de9 }\n.",[1],"uni-badge-purple.",[1],"uni-badge-inverted, .",[1],"uni-badge-royal.",[1],"uni-badge-inverted { color: #8a6de9; background-color: transparent }\n.",[1],"uni-collapse-content { height: 0; width: 100%; overflow: hidden; }\n.",[1],"uni-collapse-content.",[1],"uni-active { height: auto; }\n.",[1],"uni-card { background: #fff; -webkit-border-radius: ",[0,8],"; border-radius: ",[0,8],"; margin:",[0,20]," 0; position: relative; -webkit-box-shadow: 0 ",[0,2]," ",[0,4]," rgba(0, 0, 0, .3); box-shadow: 0 ",[0,2]," ",[0,4]," rgba(0, 0, 0, .3); }\n.",[1],"uni-card-content { font-size: ",[0,30],"; }\n.",[1],"uni-card-content.",[1],"image-view{ width: 100%; margin: 0; }\n.",[1],"uni-card-content-inner { position: relative; padding: ",[0,30],"; }\n.",[1],"uni-card-footer, .",[1],"uni-card-header { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; min-height: ",[0,50],"; padding: ",[0,20]," ",[0,30],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-card-header { font-size: ",[0,36],"; }\n.",[1],"uni-card-footer { color: #6d6d72; }\n.",[1],"uni-card-footer:before, .",[1],"uni-card-header:after { position: absolute; top: 0; right: 0; left: 0; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-card-header:after { top: auto; bottom: 0; }\n.",[1],"uni-card-media { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"uni-card-media-logo { height: ",[0,84],"; width: ",[0,84],"; margin-right: ",[0,20],"; }\n.",[1],"uni-card-media-body { height: ",[0,84],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; }\n.",[1],"uni-card-media-text-top { line-height: ",[0,36],"; font-size: ",[0,34],"; }\n.",[1],"uni-card-media-text-bottom { line-height: ",[0,30],"; font-size: ",[0,28],"; color: #8f8f94; }\n.",[1],"uni-card-link { color: #007AFF; }\n.",[1],"uni-list { background-color: #FFFFFF; position: relative; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-list:after { position: absolute; z-index: 10; right: 0; bottom: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list::before { position: absolute; z-index: 10; right: 0; top: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-list-cell-hover { background-color: #eee; }\n.",[1],"uni-list-cell-pd { padding: ",[0,22]," ",[0,30],"; }\n.",[1],"uni-list-cell-left { font-size:",[0,28],"; padding: 0 ",[0,30],"; }\n.",[1],"uni-list-cell-db, .",[1],"uni-list-cell-right { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"uni-list-cell::after { position: absolute; z-index: 3; right: 0; bottom: 0; left: ",[0,30],"; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list .",[1],"uni-list-cell:last-child::after { height: ",[0,0],"; }\n.",[1],"uni-list-cell-last.",[1],"uni-list-cell::after { height: ",[0,0],"; }\n.",[1],"uni-list-cell-divider { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; color: #999; background-color: #f7f7f7; padding:",[0,15]," ",[0,20],"; }\n.",[1],"uni-list-cell-divider::before { position: absolute; right: 0; top: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell-divider::after { position: absolute; right: 0; bottom: 0; left: ",[0,0],"; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell-navigate { font-size:",[0,30],"; padding: ",[0,22]," ",[0,30],"; line-height: ",[0,48],"; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-sizing: border-box; box-sizing: border-box; width: 100%; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-list-cell-navigate { padding-right: ",[0,36],"; }\n.",[1],"uni-navigate-badge { padding-right: ",[0,50],"; }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-right:after { font-family: uniicons; content: \x27\\E583\x27; position: absolute; right: ",[0,24],"; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-bottom:after { font-family: uniicons; content: \x27\\E581\x27; position: absolute; right: ",[0,24],"; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-bottom.",[1],"uni-active::after { font-family: uniicons; content: \x27\\E580\x27; position: absolute; right: ",[0,24],"; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-collapse.",[1],"uni-list-cell { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-list-cell-navigate.",[1],"uni-active { background: #eee; }\n.",[1],"uni-list.",[1],"uni-collapse { -webkit-box-sizing: border-box; box-sizing: border-box; height: 0; overflow: hidden; }\n.",[1],"uni-collapse .",[1],"uni-list-cell { padding-left: ",[0,20],"; }\n.",[1],"uni-collapse .",[1],"uni-list-cell::after { left: ",[0,52],"; }\n.",[1],"uni-list.",[1],"uni-active { height: auto; }\n.",[1],"uni-triplex-row { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,22]," ",[0,30],"; }\n.",[1],"uni-triplex-right, .",[1],"uni-triplex-left { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-triplex-left { width: 84%; }\n.",[1],"uni-triplex-left .",[1],"uni-title{ padding:",[0,8]," 0; }\n.",[1],"uni-triplex-left .",[1],"uni-text, .",[1],"uni-triplex-left .",[1],"uni-text-small{color:#999999;}\n.",[1],"uni-triplex-right { width: 16%; text-align: right; }\n.",[1],"uni-media-list { padding: ",[0,22]," ",[0,30],"; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-navigate-right.",[1],"uni-media-list { padding-right: ",[0,74],"; }\n.",[1],"uni-pull-right { -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -webkit-flex-direction: row-reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse; }\n.",[1],"uni-pull-right\x3e.",[1],"uni-media-list-logo { margin-right: ",[0,0],"; margin-left: ",[0,20],"; }\n.",[1],"uni-media-list-logo { height: ",[0,84],"; width: ",[0,84],"; margin-right: ",[0,20],"; }\n.",[1],"uni-media-list-logo wx-image { height: 100%; width: 100%; }\n.",[1],"uni-media-list-body { height: ",[0,84],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; overflow: hidden; }\n.",[1],"uni-media-list-text-top { width: 100%; line-height: ",[0,36],"; font-size: ",[0,30],"; }\n.",[1],"uni-media-list-text-bottom { width: 100%; line-height: ",[0,30],"; font-size: ",[0,26],"; color: #8f8f94; }\n.",[1],"uni-grid-9 { background: #f2f2f2; width: ",[0,750],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; border-top: ",[0,2]," solid #eee; }\n.",[1],"uni-grid-9-item { width: ",[0,250],"; height: ",[0,200],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-bottom: ",[0,2]," solid; border-right: ",[0,2]," solid; border-color: #eee; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"no-border-right { border-right: none; }\n.",[1],"uni-grid-9-image { width: ",[0,100],"; height: ",[0,100],"; }\n.",[1],"uni-grid-9-text { width: ",[0,250],"; line-height: ",[0,4],"; height: ",[0,40],"; text-align: center; font-size: ",[0,30],"; }\n.",[1],"uni-grid-9-item-hover { background: rgba(0, 0, 0, 0.1); }\n.",[1],"uni-uploader { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-uploader-head { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"uni-uploader-info { color: #B2B2B2; }\n.",[1],"uni-uploader-body { margin-top: ",[0,16],"; }\n.",[1],"uni-uploader__files { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"uni-uploader__file { margin: ",[0,10],"; width: ",[0,210],"; height: ",[0,210],"; }\n.",[1],"uni-uploader__img { display: block; width: ",[0,210],"; height: ",[0,210],"; }\n.",[1],"uni-uploader__input-box { position: relative; margin:",[0,10],"; width: ",[0,208],"; height: ",[0,208],"; border: ",[0,2]," solid #D9D9D9; }\n.",[1],"uni-uploader__input-box:before, .",[1],"uni-uploader__input-box:after { content: \x22 \x22; position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #D9D9D9; }\n.",[1],"uni-uploader__input-box:before { width: ",[0,4],"; height: ",[0,79],"; }\n.",[1],"uni-uploader__input-box:after { width: ",[0,79],"; height: ",[0,4],"; }\n.",[1],"uni-uploader__input-box:active { border-color: #999999; }\n.",[1],"uni-uploader__input-box:active:before, .",[1],"uni-uploader__input-box:active:after { background-color: #999999; }\n.",[1],"uni-uploader__input { position: absolute; z-index: 1; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; }\n.",[1],"feedback-title { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,20],"; color: #8f8f94; font-size: ",[0,28],"; }\n.",[1],"feedback-star-view.",[1],"feedback-title { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; margin: 0; }\n.",[1],"feedback-quick { position: relative; padding-right: ",[0,40],"; }\n.",[1],"feedback-quick:after { font-family: uniicons; font-size: ",[0,40],"; content: \x27\\E581\x27; position: absolute; right: 0; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"feedback-body { background: #fff; }\n.",[1],"feedback-textare { height: ",[0,200],"; font-size: ",[0,34],"; line-height: ",[0,50],"; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,20]," ",[0,30]," 0; }\n.",[1],"feedback-input { font-size: ",[0,34],"; height: ",[0,50],"; min-height: ",[0,50],"; padding: ",[0,15]," ",[0,20],"; line-height: ",[0,50],"; }\n.",[1],"feedback-uploader { padding: ",[0,22]," ",[0,20],"; }\n.",[1],"feedback-star { font-family: uniicons; font-size: ",[0,40],"; margin-left: ",[0,6],"; }\n.",[1],"feedback-star-view { margin-left: ",[0,20],"; }\n.",[1],"feedback-star:after { content: \x27\\E408\x27; }\n.",[1],"feedback-star.",[1],"active { color: #FFB400; }\n.",[1],"feedback-star.",[1],"active:after { content: \x27\\E438\x27; }\n.",[1],"feedback-submit { background: #007AFF; color: #FFFFFF; margin: ",[0,20],"; }\n.",[1],"uni-input-group { position: relative; padding: 0; border: 0; background-color: #fff; }\n.",[1],"uni-input-group:before { position: absolute; top: 0; right: 0; left: 0; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-input-group:after { position: absolute; right: 0; bottom: 0; left: 0; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-input-row { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; font-size:",[0,28],"; padding: ",[0,22]," ",[0,30],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"uni-input-group .",[1],"uni-input-row:after { position: absolute; right: 0; bottom: 0; left: ",[0,30],"; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-input-row wx-label { line-height: ",[0,70],"; }\n.",[1],"uni-textarea{ width:100%; background:#FFF; }\n.",[1],"uni-textarea wx-textarea{ width:96%; padding:",[0,18]," 2%; line-height:1.6; font-size:",[0,28],"; height:",[0,150],"; }\n.",[1],"uni-tab-bar { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; }\n.",[1],"uni-tab-bar .",[1],"list { width: ",[0,750],"; height: 100%; }\n.",[1],"uni-swiper-tab { width: 100%; white-space: nowrap; line-height: ",[0,100],"; height: ",[0,100],"; border-bottom: 1px solid #c8c7cc; }\n.",[1],"swiper-tab-list { font-size: ",[0,30],"; width: ",[0,150],"; display: inline-block; text-align: center; color: #555; }\n.",[1],"uni-tab-bar .",[1],"active { color: #007AFF; }\n.",[1],"uni-tab-bar .",[1],"swiper-box { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; height: -webkit-calc(100% - ",[0,100],"); height: calc(100% - ",[0,100],"); }\n.",[1],"uni-tab-bar-loading{ padding:",[0,20]," 0; }\n.",[1],"uni-comment{padding:",[0,5]," 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex:1; -webkit-flex-grow:1; -ms-flex-positive:1; flex-grow:1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column;}\n.",[1],"uni-comment-list{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap; padding:",[0,10]," 0; margin:",[0,10]," 0; width:100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex;}\n.",[1],"uni-comment-face{width:",[0,70],"; height:",[0,70],"; -webkit-border-radius:100%; border-radius:100%; margin-right:",[0,20],"; -webkit-flex-shrink:0; -ms-flex-negative:0; flex-shrink:0; overflow:hidden;}\n.",[1],"uni-comment-face wx-image{width:100%; -webkit-border-radius:100%; border-radius:100%;}\n.",[1],"uni-comment-body{width:100%;}\n.",[1],"uni-comment-top{line-height:1.5em; -webkit-box-pack:justify; -webkit-justify-content:space-between; -ms-flex-pack:justify; justify-content:space-between;}\n.",[1],"uni-comment-top wx-text{color:#0A98D5; font-size:",[0,24],";}\n.",[1],"uni-comment-date{line-height:",[0,38],"; -webkit-box-orient:horizontal; -webkit-box-direction:normal; -webkit-flex-direction:row; -ms-flex-direction:row; flex-direction:row; -webkit-box-pack:justify; -webkit-justify-content:space-between; -ms-flex-pack:justify; justify-content:space-between; display:-webkit-box !important; display:-webkit-flex !important; display:-ms-flexbox !important; display:flex !important; -webkit-box-flex:1; -webkit-flex-grow:1; -ms-flex-positive:1; flex-grow:1;}\n.",[1],"uni-comment-date wx-view{color:#666666; font-size:",[0,24],"; line-height:",[0,38],";}\n.",[1],"uni-comment-content{line-height:1.6em; font-size:",[0,28],"; padding:",[0,8]," 0;}\n.",[1],"uni-comment-replay-btn{background:#FFF; font-size:",[0,24],"; line-height:",[0,28],"; padding:",[0,5]," ",[0,20],"; -webkit-border-radius:",[0,30],"; border-radius:",[0,30],"; color:#333 !important; margin:0 ",[0,10],";}\n.",[1],"uni-swiper-msg{width:100%; padding:",[0,12]," 0; -webkit-flex-wrap:nowrap; -ms-flex-wrap:nowrap; flex-wrap:nowrap; display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex;}\n.",[1],"uni-swiper-msg-icon{width:",[0,50],"; margin-right:",[0,20],";}\n.",[1],"uni-swiper-msg-icon wx-image{width:100%; -webkit-flex-shrink:0; -ms-flex-negative:0; flex-shrink:0;}\n.",[1],"uni-swiper-msg wx-swiper{width:100%; height:",[0,50],";}\n.",[1],"uni-swiper-msg wx-swiper-item{line-height:",[0,50],";}\n.",[1],"uni-product-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-product { padding: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"image-view { height: ",[0,330],"; width: ",[0,330],"; margin:",[0,12]," 0; }\n.",[1],"uni-product-image { height: ",[0,330],"; width: ",[0,330],"; }\n.",[1],"uni-product-title { width: ",[0,300],"; word-break: break-all; display: -webkit-box; overflow: hidden; line-height:1.5; -o-text-overflow: ellipsis; text-overflow: ellipsis; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }\n.",[1],"uni-product-price { margin-top:",[0,10],"; font-size: ",[0,28],"; line-height:1.5; position: relative; }\n.",[1],"uni-product-price-original { color: #e80080; }\n.",[1],"uni-product-price-favour { color: #888888; text-decoration: line-through; margin-left: ",[0,10],"; }\n.",[1],"uni-product-tip { position: absolute; right: ",[0,10],"; background-color: #ff3333; color: #ffffff; padding: 0 ",[0,10],"; -webkit-border-radius: ",[0,5],"; border-radius: ",[0,5],"; }\n.",[1],"uni-timeline { margin: ",[0,35]," 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; position: relative; }\n.",[1],"uni-timeline-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; position: relative; padding-bottom: ",[0,20],"; -webkit-box-sizing: border-box; box-sizing: border-box; overflow: hidden; }\n.",[1],"uni-timeline-item .",[1],"uni-timeline-item-keynode { width: ",[0,160],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; -webkit-box-sizing: border-box; box-sizing: border-box; padding-right: ",[0,20],"; text-align: right; line-height: ",[0,65],"; }\n.",[1],"uni-timeline-item .",[1],"uni-timeline-item-divider { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; position: relative; width: ",[0,30],"; height: ",[0,30],"; top: ",[0,15],"; -webkit-border-radius: 50%; border-radius: 50%; background-color: #bbb; }\n.",[1],"uni-timeline-item-divider::before, .",[1],"uni-timeline-item-divider::after { position: absolute; left: ",[0,15],"; width: ",[0,1],"; height: 100vh; content: \x27\x27; background: inherit; }\n.",[1],"uni-timeline-item-divider::before { bottom: 100%; }\n.",[1],"uni-timeline-item-divider::after { top: 100%; }\n.",[1],"uni-timeline-last-item .",[1],"uni-timeline-item-divider:after { display: none; }\n.",[1],"uni-timeline-first-item .",[1],"uni-timeline-item-divider:before { display: none; }\n.",[1],"uni-timeline-item .",[1],"uni-timeline-item-content { padding-left: ",[0,20],"; }\n.",[1],"uni-timeline-last-item .",[1],"bottom-border::after{ display: none; }\n.",[1],"uni-timeline-item-content .",[1],"datetime{ color: #CCCCCC; }\n.",[1],"uni-timeline-last-item .",[1],"uni-timeline-item-divider{ background-color: #1AAD19; }\n.",[1],"uni-icon { font-family: uniicons; font-size: 24px; font-weight: normal; font-style: normal; line-height: 1; display: inline-block; text-decoration: none; -webkit-font-smoothing: antialiased; }\n.",[1],"uni-icon.",[1],"uni-active { color: #007aff; }\n.",[1],"uni-icon-contact:before { content: \x27\\E100\x27; }\n.",[1],"uni-icon-person:before { content: \x27\\E101\x27; }\n.",[1],"uni-icon-personadd:before { content: \x27\\E102\x27; }\n.",[1],"uni-icon-contact-filled:before { content: \x27\\E130\x27; }\n.",[1],"uni-icon-person-filled:before { content: \x27\\E131\x27; }\n.",[1],"uni-icon-personadd-filled:before { content: \x27\\E132\x27; }\n.",[1],"uni-icon-phone:before { content: \x27\\E200\x27; }\n.",[1],"uni-icon-email:before { content: \x27\\E201\x27; }\n.",[1],"uni-icon-chatbubble:before { content: \x27\\E202\x27; }\n.",[1],"uni-icon-chatboxes:before { content: \x27\\E203\x27; }\n.",[1],"uni-icon-phone-filled:before { content: \x27\\E230\x27; }\n.",[1],"uni-icon-email-filled:before { content: \x27\\E231\x27; }\n.",[1],"uni-icon-chatbubble-filled:before { content: \x27\\E232\x27; }\n.",[1],"uni-icon-chatboxes-filled:before { content: \x27\\E233\x27; }\n.",[1],"uni-icon-weibo:before { content: \x27\\E260\x27; }\n.",[1],"uni-icon-weixin:before { content: \x27\\E261\x27; }\n.",[1],"uni-icon-pengyouquan:before { content: \x27\\E262\x27; }\n.",[1],"uni-icon-chat:before { content: \x27\\E263\x27; }\n.",[1],"uni-icon-qq:before { content: \x27\\E264\x27; }\n.",[1],"uni-icon-videocam:before { content: \x27\\E300\x27; }\n.",[1],"uni-icon-camera:before { content: \x27\\E301\x27; }\n.",[1],"uni-icon-mic:before { content: \x27\\E302\x27; }\n.",[1],"uni-icon-location:before { content: \x27\\E303\x27; }\n.",[1],"uni-icon-mic-filled:before, .",[1],"uni-icon-speech:before { content: \x27\\E332\x27; }\n.",[1],"uni-icon-location-filled:before { content: \x27\\E333\x27; }\n.",[1],"uni-icon-micoff:before { content: \x27\\E360\x27; }\n.",[1],"uni-icon-image:before { content: \x27\\E363\x27; }\n.",[1],"uni-icon-map:before { content: \x27\\E364\x27; }\n.",[1],"uni-icon-compose:before { content: \x27\\E400\x27; }\n.",[1],"uni-icon-trash:before { content: \x27\\E401\x27; }\n.",[1],"uni-icon-upload:before { content: \x27\\E402\x27; }\n.",[1],"uni-icon-download:before { content: \x27\\E403\x27; }\n.",[1],"uni-icon-close:before { content: \x27\\E404\x27; }\n.",[1],"uni-icon-redo:before { content: \x27\\E405\x27; }\n.",[1],"uni-icon-undo:before { content: \x27\\E406\x27; }\n.",[1],"uni-icon-refresh:before { content: \x27\\E407\x27; }\n.",[1],"uni-icon-star:before { content: \x27\\E408\x27; }\n.",[1],"uni-icon-plus:before { content: \x27\\E409\x27; }\n.",[1],"uni-icon-minus:before { content: \x27\\E410\x27; }\n.",[1],"uni-icon-circle:before, .",[1],"uni-icon-checkbox:before { content: \x27\\E411\x27; }\n.",[1],"uni-icon-close-filled:before, .",[1],"uni-icon-clear:before { content: \x27\\E434\x27; }\n.",[1],"uni-icon-refresh-filled:before { content: \x27\\E437\x27; }\n.",[1],"uni-icon-star-filled:before { content: \x27\\E438\x27; }\n.",[1],"uni-icon-plus-filled:before { content: \x27\\E439\x27; }\n.",[1],"uni-icon-minus-filled:before { content: \x27\\E440\x27; }\n.",[1],"uni-icon-circle-filled:before { content: \x27\\E441\x27; }\n.",[1],"uni-icon-checkbox-filled:before { content: \x27\\E442\x27; }\n.",[1],"uni-icon-closeempty:before { content: \x27\\E460\x27; }\n.",[1],"uni-icon-refreshempty:before { content: \x27\\E461\x27; }\n.",[1],"uni-icon-reload:before { content: \x27\\E462\x27; }\n.",[1],"uni-icon-starhalf:before { content: \x27\\E463\x27; }\n.",[1],"uni-icon-spinner:before { content: \x27\\E464\x27; }\n.",[1],"uni-icon-spinner-cycle:before { content: \x27\\E465\x27; }\n.",[1],"uni-icon-search:before { content: \x27\\E466\x27; }\n.",[1],"uni-icon-plusempty:before { content: \x27\\E468\x27; }\n.",[1],"uni-icon-forward:before { content: \x27\\E470\x27; }\n.",[1],"uni-icon-back:before, .",[1],"uni-icon-left-nav:before { content: \x27\\E471\x27; }\n.",[1],"uni-icon-checkmarkempty:before { content: \x27\\E472\x27; }\n.",[1],"uni-icon-home:before { content: \x27\\E500\x27; }\n.",[1],"uni-icon-navigate:before { content: \x27\\E501\x27; }\n.",[1],"uni-icon-gear:before { content: \x27\\E502\x27; }\n.",[1],"uni-icon-paperplane:before { content: \x27\\E503\x27; }\n.",[1],"uni-icon-info:before { content: \x27\\E504\x27; }\n.",[1],"uni-icon-help:before { content: \x27\\E505\x27; }\n.",[1],"uni-icon-locked:before { content: \x27\\E506\x27; }\n.",[1],"uni-icon-more:before { content: \x27\\E507\x27; }\n.",[1],"uni-icon-flag:before { content: \x27\\E508\x27; }\n.",[1],"uni-icon-home-filled:before { content: \x27\\E530\x27; }\n.",[1],"uni-icon-gear-filled:before { content: \x27\\E532\x27; }\n.",[1],"uni-icon-info-filled:before { content: \x27\\E534\x27; }\n.",[1],"uni-icon-help-filled:before { content: \x27\\E535\x27; }\n.",[1],"uni-icon-more-filled:before { content: \x27\\E537\x27; }\n.",[1],"uni-icon-settings:before { content: \x27\\E560\x27; }\n.",[1],"uni-icon-list:before { content: \x27\\E562\x27; }\n.",[1],"uni-icon-bars:before { content: \x27\\E563\x27; }\n.",[1],"uni-icon-loop:before { content: \x27\\E565\x27; }\n.",[1],"uni-icon-paperclip:before { content: \x27\\E567\x27; }\n.",[1],"uni-icon-eye:before { content: \x27\\E568\x27; }\n.",[1],"uni-icon-arrowup:before { content: \x27\\E580\x27; }\n.",[1],"uni-icon-arrowdown:before { content: \x27\\E581\x27; }\n.",[1],"uni-icon-arrowleft:before { content: \x27\\E582\x27; }\n.",[1],"uni-icon-arrowright:before { content: \x27\\E583\x27; }\n.",[1],"uni-icon-arrowthinup:before { content: \x27\\E584\x27; }\n.",[1],"uni-icon-arrowthindown:before { content: \x27\\E585\x27; }\n.",[1],"uni-icon-arrowthinleft:before { content: \x27\\E586\x27; }\n.",[1],"uni-icon-arrowthinright:before { content: \x27\\E587\x27; }\n.",[1],"uni-icon-pulldown:before { content: \x27\\E588\x27; }\n.",[1],"uni-icon-scan:before { content: \x22\\E612\x22; }\n.",[1],"uni-divider{ height: ",[0,110],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align:center; -webkit-align-items:center; -ms-flex-align:center; align-items:center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; position: relative; }\n.",[1],"uni-divider__content{ font-size: ",[0,28],"; color: #999; padding: 0 ",[0,20],"; position: relative; z-index: 101; background: #F4F5F6; }\n.",[1],"uni-divider__line{ background-color: #CCCCCC; height: 1px; width: 100%; position: absolute; z-index: 100; top: 50%; left: 0; -webkit-transform: translateY(50%); -ms-transform: translateY(50%); transform: translateY(50%); }\nbody { background-color: #F4F5F6; height: 100%; font-size: ",[0,28],"; line-height: 1.8; }\n.",[1],"uni-header-logo { padding: ",[0,30],"; text-align: center; margin-top: ",[0,10],"; }\n.",[1],"uni-header-logo wx-image { width: ",[0,140],"; height: ",[0,140],"; }\n.",[1],"uni-hello-text { color: #7A7E83; }\n.",[1],"uni-hello-addfile { text-align: center; line-height: ",[0,300],"; background: #FFF; padding: ",[0,50],"; margin-top: 10px; font-size: ",[0,38],"; color: #808080; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/tabBar/bluetooth/bluetooth.wxss']=undefined;    
__wxAppCode__['pages/tabBar/bluetooth/bluetooth.wxml']=$gwx('./pages/tabBar/bluetooth/bluetooth.wxml');

__wxAppCode__['pages/tabBar/blueya/blueya.wxss']=setCssToHead([".",[1],"bluetooth{ }\n.",[1],"bluetooth .",[1],"h1{ padding: ",[0,20]," 0;color: #1482D1;border-top: ",[0,1]," solid #EFEFF4; }\n.",[1],"bluetooth .",[1],"btn{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; -webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;width: 100%;color:#fff;border-top:1px solid #f2f2f2;background-color: #fff; }\n.",[1],"bluetooth .",[1],"btn wx-view{ width: ",[0,200],";height: ",[0,80],";line-height:",[0,80],";text-align: center;-webkit-border-radius:",[0,10],";border-radius:",[0,10],"; }\n.",[1],"bluetooth .",[1],"btn .",[1],"btn_1{ background-color: #009BDE; }\n.",[1],"bluetooth .",[1],"btn .",[1],"btn_2{ background-color: red; }\n.",[1],"bluetooth .",[1],"btn .",[1],"btn_3{ background-color: #3CB371; }\n.",[1],"bluetooth .",[1],"uni-textarea wx-textarea{ border: 1px solid #EFEFF4;-webkit-border-radius: 10px;border-radius: 10px;width: 100%;padding: ",[0,10],";-webkit-box-sizing: border-box;box-sizing: border-box; }\n.",[1],"bluetooth .",[1],"uni-textarea .",[1],"fasong{ width: 100%;padding:",[0,15]," ",[0,10],";-webkit-box-sizing: border-box;box-sizing: border-box;-webkit-border-radius: 10px;border-radius: 10px;background: #1482D1;text-align: center;color: white;margin: 10px 0; }\n",],undefined,{path:"./pages/tabBar/blueya/blueya.wxss"});    
__wxAppCode__['pages/tabBar/blueya/blueya.wxml']=$gwx('./pages/tabBar/blueya/blueya.wxml');

__wxAppCode__['pages/tabBar/blueya2/blueya2.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"bluetooth.",[1],"data-v-270b7f8c { padding: ",[0,20]," ",[0,20]," ",[0,120],"; }\n.",[1],"bluetooth .",[1],"h1.",[1],"data-v-270b7f8c { padding: ",[0,20]," 0; color: #1482D1; border-top: ",[0,1]," solid #EFEFF4; }\n.",[1],"bluetooth .",[1],"btn.",[1],"data-v-270b7f8c { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: fixed; bottom: ",[0,0],"; padding: ",[0,20]," ",[0,10],"; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; width: 100%; color: #fff; border-top: 1px solid #f2f2f2; background-color: #fff; }\n.",[1],"bluetooth .",[1],"btn wx-view.",[1],"data-v-270b7f8c { width: ",[0,200],"; height: ",[0,80],"; line-height: ",[0,80],"; text-align: center; -webkit-border-radius: ",[0,10],"; border-radius: ",[0,10],"; }\n.",[1],"bluetooth .",[1],"btn .",[1],"btn_1.",[1],"data-v-270b7f8c { background-color: #009BDE; }\n.",[1],"bluetooth .",[1],"btn .",[1],"btn_2.",[1],"data-v-270b7f8c { background-color: red; }\n.",[1],"bluetooth .",[1],"btn .",[1],"btn_3.",[1],"data-v-270b7f8c { background-color: #3CB371; }\n.",[1],"bluetooth .",[1],"uni-textarea wx-textarea.",[1],"data-v-270b7f8c { border: 1px solid #EFEFF4; -webkit-border-radius: 10px; border-radius: 10px; width: 100%; padding: ",[0,10],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"bluetooth .",[1],"uni-textarea .",[1],"fasong.",[1],"data-v-270b7f8c { width: 100%; padding: ",[0,15]," ",[0,10],"; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-border-radius: 10px; border-radius: 10px; background: #1482D1; text-align: center; color: white; margin: 10px 0; }\n",],undefined,{path:"./pages/tabBar/blueya2/blueya2.wxss"});    
__wxAppCode__['pages/tabBar/blueya2/blueya2.wxml']=$gwx('./pages/tabBar/blueya2/blueya2.wxml');

__wxAppCode__['pages/tabBar/component/component.wxss']=undefined;    
__wxAppCode__['pages/tabBar/component/component.wxml']=$gwx('./pages/tabBar/component/component.wxml');

__wxAppCode__['pages/tabBar/h5blue/h5blue.wxss']=undefined;    
__wxAppCode__['pages/tabBar/h5blue/h5blue.wxml']=$gwx('./pages/tabBar/h5blue/h5blue.wxml');

__wxAppCode__['pages/tabBar/plush5/plush5.wxss']=undefined;    
__wxAppCode__['pages/tabBar/plush5/plush5.wxml']=$gwx('./pages/tabBar/plush5/plush5.wxml');

__wxAppCode__['pages/tabBar/uni-blue/uni-blue.wxss']=undefined;    
__wxAppCode__['pages/tabBar/uni-blue/uni-blue.wxml']=$gwx('./pages/tabBar/uni-blue/uni-blue.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
