/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const js="150";const Gt="srgb",yi="srgb-linear",So="display-p3";const fr="300 es";class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pr=1234567;const ui=Math.PI/180,_i=180/Math.PI;function Ft(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ot[a&255]+ot[a>>8&255]+ot[a>>16&255]+ot[a>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[n&255]+ot[n>>8&255]+ot[n>>16&255]+ot[n>>24&255]).toLowerCase()}function st(a,e,t){return Math.max(e,Math.min(t,a))}function Ys(a,e){return(a%e+e)%e}function ha(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function ua(a,e,t){return a!==e?(t-a)/(e-a):0}function di(a,e,t){return(1-t)*a+t*e}function da(a,e,t,n){return di(a,e,1-Math.exp(-t*n))}function fa(a,e=1){return e-Math.abs(Ys(a,e*2)-e)}function pa(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function ma(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function ga(a,e){return a+Math.floor(Math.random()*(e-a+1))}function ya(a,e){return a+Math.random()*(e-a)}function _a(a){return a*(.5-Math.random())}function xa(a){a!==void 0&&(pr=a);let e=pr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function va(a){return a*ui}function Ma(a){return a*_i}function Us(a){return(a&a-1)===0&&a!==0}function bo(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function To(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function wa(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*h,l*u,l*d,o*c);break;case"YZY":a.set(l*d,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*d,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*f,o*c);break;case"YXY":a.set(l*f,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ue(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Et={DEG2RAD:ui,RAD2DEG:_i,generateUUID:Ft,clamp:st,euclideanModulo:Ys,mapLinear:ha,inverseLerp:ua,lerp:di,damp:da,pingpong:fa,smoothstep:pa,smootherstep:ma,randInt:ga,randFloat:ya,randFloatSpread:_a,seededRandom:xa,degToRad:va,radToDeg:Ma,isPowerOfTwo:Us,ceilPowerOfTwo:bo,floorPowerOfTwo:To,setQuaternionFromProperEuler:wa,normalize:Ue,denormalize:Qt};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],p=i[0],m=i[3],_=i[6],M=i[1],y=i[4],x=i[7],T=i[2],C=i[5],L=i[8];return s[0]=r*p+o*M+l*T,s[3]=r*m+o*y+l*C,s[6]=r*_+o*x+l*L,s[1]=c*p+h*M+u*T,s[4]=c*m+h*y+u*C,s[7]=c*_+h*x+u*L,s[2]=d*p+f*M+g*T,s[5]=d*m+f*y+g*C,s[8]=d*_+f*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,d=o*l-h*s,f=c*s-r*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=u*p,e[1]=(i*c-h*n)*p,e[2]=(o*n-i*r)*p,e[3]=d*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-o*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(r*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(as.makeScale(e,t)),this}rotate(e){return this.premultiply(as.makeRotation(-e)),this}translate(e,t){return this.premultiply(as.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const as=new yt;function Ao(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function xi(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}class Nt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],p=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==d||c!==f||h!==g){let m=1-o;const _=l*d+c*f+h*g+u*p,M=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const T=Math.sqrt(y),C=Math.atan2(T,_*M);m=Math.sin(m*C)/T,o=Math.sin(o*C)/T}const x=o*M;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+p*x,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=l*t+r*i-o*n,h=l*n+o*t-s*i,u=l*i+s*n-r*t,d=-s*t-r*n-o*i;return this.x=c*l+d*-s+h*-o-u*-r,this.y=h*l+d*-r+u*-s-c*-o,this.z=u*l+d*-o+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ls.copy(this).projectOnVector(e),this.sub(ls)}reflect(e){return this.sub(ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ls=new w,mr=new Nt;function kn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function cs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Sa=new yt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ba=new yt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),hn=new w;function Ta(a){return a.convertSRGBToLinear(),hn.set(a.r,a.g,a.b).applyMatrix3(ba),a.setRGB(hn.x,hn.y,hn.z)}function Aa(a){return hn.set(a.r,a.g,a.b).applyMatrix3(Sa),a.setRGB(hn.x,hn.y,hn.z).convertLinearToSRGB()}const Ea={[yi]:a=>a,[Gt]:a=>a.convertSRGBToLinear(),[So]:Ta},Ca={[yi]:a=>a,[Gt]:a=>a.convertLinearToSRGB(),[So]:Aa},pt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return yi},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=Ea[e],i=Ca[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let An;class Eo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{An===void 0&&(An=xi("canvas")),An.width=e.width,An.height=e.height;const n=An.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=An}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=kn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Co{constructor(e=null){this.isSource=!0,this.uuid=Ft(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(hs(i[r].image)):s.push(hs(i[r]))}else s=hs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function hs(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Eo.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let La=0;class rt extends jn{constructor(e=rt.DEFAULT_IMAGE,t=rt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,o=1023,l=1009,c=rt.DEFAULT_ANISOTROPY,h=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:La++}),this.uuid=Ft(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}rt.DEFAULT_IMAGE=null;rt.DEFAULT_MAPPING=300;rt.DEFAULT_ANISOTROPY=1;class Oe{constructor(e=0,t=0,n=0,i=1){Oe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,T=(_+1)/2,C=(h+d)/4,L=(u+p)/4,v=(g+m)/4;return y>x&&y>T?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=C/n,s=L/n):x>T?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=C/i,s=v/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=L/s,i=v/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-p)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wn extends jn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lo extends rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa extends rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)gn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(gn)}else n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox),us.applyMatrix4(e.matrixWorld),this.union(us);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qn),Ai.subVectors(this.max,Qn),En.subVectors(e.a,Qn),Cn.subVectors(e.b,Qn),Ln.subVectors(e.c,Qn),nn.subVectors(Cn,En),sn.subVectors(Ln,Cn),yn.subVectors(En,Ln);let t=[0,-nn.z,nn.y,0,-sn.z,sn.y,0,-yn.z,yn.y,nn.z,0,-nn.x,sn.z,0,-sn.x,yn.z,0,-yn.x,-nn.y,nn.x,0,-sn.y,sn.x,0,-yn.y,yn.x,0];return!ds(t,En,Cn,Ln,Ai)||(t=[1,0,0,0,1,0,0,0,1],!ds(t,En,Cn,Ln,Ai))?!1:(Ei.crossVectors(nn,sn),t=[Ei.x,Ei.y,Ei.z],ds(t,En,Cn,Ln,Ai))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xt=[new w,new w,new w,new w,new w,new w,new w,new w],gn=new w,us=new tn,En=new w,Cn=new w,Ln=new w,nn=new w,sn=new w,yn=new w,Qn=new w,Ai=new w,Ei=new w,_n=new w;function ds(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){_n.fromArray(a,s);const o=i.x*Math.abs(_n.x)+i.y*Math.abs(_n.y)+i.z*Math.abs(_n.z),l=e.dot(_n),c=t.dot(_n),h=n.dot(_n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Da=new tn,ei=new w,fs=new w;class Yn{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Da.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ei.subVectors(e,this.center);const t=ei.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ei,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ei.copy(e.center).add(fs)),this.expandByPoint(ei.copy(e.center).sub(fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new w,ps=new w,Ci=new w,rn=new w,ms=new w,Li=new w,gs=new w;class Ji{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.origin).addScaledVector(this.direction,t),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ps.copy(e).add(t).multiplyScalar(.5),Ci.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(ps);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ci),o=rn.dot(this.direction),l=-rn.dot(Ci),c=rn.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-o,d=r*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const p=1/h;u*=p,d*=p,f=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ps).addScaledVector(Ci,d),f}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),i=jt.dot(jt)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,i,s){ms.subVectors(t,e),Li.subVectors(n,e),gs.crossVectors(ms,Li);let r=this.direction.dot(gs),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;rn.subVectors(this.origin,e);const l=o*this.direction.dot(Li.crossVectors(rn,Li));if(l<0)return null;const c=o*this.direction.dot(ms.cross(rn));if(c<0||l+c>r)return null;const h=-o*rn.dot(gs);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,l,c,h,u,d,f,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=f,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pn.setFromMatrixColumn(e,0).length(),s=1/Pn.setFromMatrixColumn(e,1).length(),r=1/Pn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,g=o*h,p=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-p*c,t[9]=-o*l,t[2]=p-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d+p*o,t[4]=g*o-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=f*o-g,t[6]=p+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d-p*o,t[4]=-r*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*h,t[9]=p-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,g=o*h,p=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+p,t[1]=l*u,t[5]=p*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=o*l,p=o*c;t[0]=l*h,t[4]=p-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-p*u}else if(e.order==="XZY"){const d=r*l,f=r*c,g=o*l,p=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+p,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ra,e,Ia)}lookAt(e,t,n){const i=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),on.crossVectors(n,wt),on.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),on.crossVectors(n,wt)),on.normalize(),Pi.crossVectors(wt,on),i[0]=on.x,i[4]=Pi.x,i[8]=wt.x,i[1]=on.y,i[5]=Pi.y,i[9]=wt.y,i[2]=on.z,i[6]=Pi.z,i[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],p=n[6],m=n[10],_=n[14],M=n[3],y=n[7],x=n[11],T=n[15],C=i[0],L=i[4],v=i[8],A=i[12],D=i[1],W=i[5],U=i[9],F=i[13],R=i[2],O=i[6],j=i[10],J=i[14],q=i[3],Z=i[7],Y=i[11],pe=i[15];return s[0]=r*C+o*D+l*R+c*q,s[4]=r*L+o*W+l*O+c*Z,s[8]=r*v+o*U+l*j+c*Y,s[12]=r*A+o*F+l*J+c*pe,s[1]=h*C+u*D+d*R+f*q,s[5]=h*L+u*W+d*O+f*Z,s[9]=h*v+u*U+d*j+f*Y,s[13]=h*A+u*F+d*J+f*pe,s[2]=g*C+p*D+m*R+_*q,s[6]=g*L+p*W+m*O+_*Z,s[10]=g*v+p*U+m*j+_*Y,s[14]=g*A+p*F+m*J+_*pe,s[3]=M*C+y*D+x*R+T*q,s[7]=M*L+y*W+x*O+T*Z,s[11]=M*v+y*U+x*j+T*Y,s[15]=M*A+y*F+x*J+T*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+p*(+t*l*f-t*c*d+s*r*d-i*r*f+i*c*h-s*l*h)+m*(+t*c*u-t*o*f-s*r*u+n*r*f+s*o*h-n*c*h)+_*(-i*o*h-t*l*u+t*o*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],p=e[13],m=e[14],_=e[15],M=u*m*c-p*d*c+p*l*f-o*m*f-u*l*_+o*d*_,y=g*d*c-h*m*c-g*l*f+r*m*f+h*l*_-r*d*_,x=h*p*c-g*u*c+g*o*f-r*p*f-h*o*_+r*u*_,T=g*u*l-h*p*l-g*o*d+r*p*d+h*o*m-r*u*m,C=t*M+n*y+i*x+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=M*L,e[1]=(p*d*s-u*m*s-p*i*f+n*m*f+u*i*_-n*d*_)*L,e[2]=(o*m*s-p*l*s+p*i*c-n*m*c-o*i*_+n*l*_)*L,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*L,e[4]=y*L,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*_+t*d*_)*L,e[6]=(g*l*s-r*m*s-g*i*c+t*m*c+r*i*_-t*l*_)*L,e[7]=(r*d*s-h*l*s+h*i*c-t*d*c-r*i*f+t*l*f)*L,e[8]=x*L,e[9]=(g*u*s-h*p*s-g*n*f+t*p*f+h*n*_-t*u*_)*L,e[10]=(r*p*s-g*o*s+g*n*c-t*p*c-r*n*_+t*o*_)*L,e[11]=(h*o*s-r*u*s-h*n*c+t*u*c+r*n*f-t*o*f)*L,e[12]=T*L,e[13]=(h*p*i-g*u*i+g*n*d-t*p*d-h*n*m+t*u*m)*L,e[14]=(g*o*i-r*p*i-g*n*l+t*p*l+r*n*m-t*o*m)*L,e[15]=(r*u*i-h*o*i+h*n*l-t*u*l-r*n*d+t*o*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,u=o+o,d=s*c,f=s*h,g=s*u,p=r*h,m=r*u,_=o*u,M=l*c,y=l*h,x=l*u,T=n.x,C=n.y,L=n.z;return i[0]=(1-(p+_))*T,i[1]=(f+x)*T,i[2]=(g-y)*T,i[3]=0,i[4]=(f-x)*C,i[5]=(1-(d+_))*C,i[6]=(m+M)*C,i[7]=0,i[8]=(g+y)*L,i[9]=(m-M)*L,i[10]=(1-(d+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pn.set(i[0],i[1],i[2]).length();const r=Pn.set(i[4],i[5],i[6]).length(),o=Pn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Pt.copy(this);const c=1/s,h=1/r,u=1/o;return Pt.elements[0]*=c,Pt.elements[1]*=c,Pt.elements[2]*=c,Pt.elements[4]*=h,Pt.elements[5]*=h,Pt.elements[6]*=h,Pt.elements[8]*=u,Pt.elements[9]*=u,Pt.elements[10]*=u,t.setFromRotationMatrix(Pt),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(r+s)/(r-s),f=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),u=(t+e)*l,d=(n+i)*c,f=(r+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pn=new w,Pt=new Se,Ra=new w(0,0,0),Ia=new w(1,1,1),on=new w,Pi=new w,wt=new w,gr=new Se,yr=new Nt;class bn{constructor(e=0,t=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-st(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yr.setFromEuler(this),this.setFromQuaternion(yr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class $s{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fa=0;const _r=new w,Dn=new Nt,Yt=new Se,Di=new w,ti=new w,Na=new w,za=new Nt,xr=new w(1,0,0),vr=new w(0,1,0),Mr=new w(0,0,1),Ba={type:"added"},wr={type:"removed"};class qe extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fa++}),this.uuid=Ft(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const e=new w,t=new bn,n=new Nt,i=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new yt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.premultiply(Dn),this}rotateX(e){return this.rotateOnAxis(xr,e)}rotateY(e){return this.rotateOnAxis(vr,e)}rotateZ(e){return this.rotateOnAxis(Mr,e)}translateOnAxis(e,t){return _r.copy(e).applyQuaternion(this.quaternion),this.position.add(_r.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xr,e)}translateY(e){return this.translateOnAxis(vr,e)}translateZ(e){return this.translateOnAxis(Mr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Di.copy(e):Di.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(ti,Di,this.up):Yt.lookAt(Di,ti,this.up),this.quaternion.setFromRotationMatrix(Yt),i&&(Yt.extractRotation(i.matrixWorld),Dn.setFromRotationMatrix(Yt),this.quaternion.premultiply(Dn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ba)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wr)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(wr)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ti,e,Na),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ti,za,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qe.DEFAULT_UP=new w(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dt=new w,$t=new w,ys=new w,Kt=new w,Rn=new w,In=new w,Sr=new w,_s=new w,xs=new w,vs=new w;class Zt{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dt.subVectors(e,t),i.cross(Dt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Dt.subVectors(i,t),$t.subVectors(n,t),ys.subVectors(e,t);const r=Dt.dot(Dt),o=Dt.dot($t),l=Dt.dot(ys),c=$t.dot($t),h=$t.dot(ys),u=r*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,g=(r*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kt),Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getUV(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,Kt),l.set(0,0),l.addScaledVector(s,Kt.x),l.addScaledVector(r,Kt.y),l.addScaledVector(o,Kt.z),l}static isFrontFacing(e,t,n,i){return Dt.subVectors(n,t),$t.subVectors(e,t),Dt.cross($t).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dt.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Dt.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Zt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;Rn.subVectors(i,n),In.subVectors(s,n),_s.subVectors(e,n);const l=Rn.dot(_s),c=In.dot(_s);if(l<=0&&c<=0)return t.copy(n);xs.subVectors(e,i);const h=Rn.dot(xs),u=In.dot(xs);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Rn,r);vs.subVectors(e,s);const f=Rn.dot(vs),g=In.dot(vs);if(g>=0&&f<=g)return t.copy(s);const p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(In,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Sr.subVectors(s,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Sr,o);const _=1/(m+p+d);return r=p*_,o=d*_,t.copy(n).addScaledVector(Rn,r).addScaledVector(In,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ua=0;class Vt extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ua++}),this.uuid=Ft(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Po={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rt={h:0,s:0,l:0},Ri={h:0,s:0,l:0};function Ms(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Ys(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Ms(r,s,e+1/3),this.g=Ms(r,s,e),this.b=Ms(r,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,pt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,pt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,pt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,pt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Po[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return pt.fromWorkingColorSpace(at.copy(this),e),st(at.r*255,0,255)<<16^st(at.g*255,0,255)<<8^st(at.b*255,0,255)<<0}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(at.copy(this),t);const n=at.r,i=at.g,s=at.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(at.copy(this),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=Gt){pt.fromWorkingColorSpace(at.copy(this),e);const t=at.r,n=at.g,i=at.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Rt),Rt.h+=e,Rt.s+=t,Rt.l+=n,this.setHSL(Rt.h,Rt.s,Rt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rt),e.getHSL(Ri);const n=di(Rt.h,Ri.h,t),i=di(Rt.s,Ri.s,t),s=di(Rt.l,Ri.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const at=new ye;ye.NAMES=Po;class xt extends Vt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new w,Ii=new ie;class We{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ii.fromBufferAttribute(this,t),Ii.applyMatrix3(e),this.setXY(t,Ii.x,Ii.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Do extends We{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ro extends We{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ge extends We{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Oa=0;const Tt=new Se,ws=new qe,Fn=new w,St=new tn,ni=new tn,it=new w;class Je extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oa++}),this.uuid=Ft(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ao(e)?Ro:Do)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new yt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tt.makeRotationFromQuaternion(e),this.applyMatrix4(Tt),this}rotateX(e){return Tt.makeRotationX(e),this.applyMatrix4(Tt),this}rotateY(e){return Tt.makeRotationY(e),this.applyMatrix4(Tt),this}rotateZ(e){return Tt.makeRotationZ(e),this.applyMatrix4(Tt),this}translate(e,t,n){return Tt.makeTranslation(e,t,n),this.applyMatrix4(Tt),this}scale(e,t,n){return Tt.makeScale(e,t,n),this.applyMatrix4(Tt),this}lookAt(e){return ws.lookAt(e),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ge(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];St.setFromBufferAttribute(s),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ni.setFromBufferAttribute(o),this.morphTargetsRelative?(it.addVectors(St.min,ni.min),St.expandByPoint(it),it.addVectors(St.max,ni.max),St.expandByPoint(it)):(St.expandByPoint(ni.min),St.expandByPoint(ni.max))}St.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)it.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(it));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)it.fromBufferAttribute(o,c),l&&(Fn.fromBufferAttribute(e,c),it.add(Fn)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let D=0;D<o;D++)c[D]=new w,h[D]=new w;const u=new w,d=new w,f=new w,g=new ie,p=new ie,m=new ie,_=new w,M=new w;function y(D,W,U){u.fromArray(i,D*3),d.fromArray(i,W*3),f.fromArray(i,U*3),g.fromArray(r,D*2),p.fromArray(r,W*2),m.fromArray(r,U*2),d.sub(u),f.sub(u),p.sub(g),m.sub(g);const F=1/(p.x*m.y-m.x*p.y);isFinite(F)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(F),M.copy(f).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(F),c[D].add(_),c[W].add(_),c[U].add(_),h[D].add(M),h[W].add(M),h[U].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let D=0,W=x.length;D<W;++D){const U=x[D],F=U.start,R=U.count;for(let O=F,j=F+R;O<j;O+=3)y(n[O+0],n[O+1],n[O+2])}const T=new w,C=new w,L=new w,v=new w;function A(D){L.fromArray(s,D*3),v.copy(L);const W=c[D];T.copy(W),T.sub(L.multiplyScalar(L.dot(W))).normalize(),C.crossVectors(v,W);const F=C.dot(h[D])<0?-1:1;l[D*4]=T.x,l[D*4+1]=T.y,l[D*4+2]=T.z,l[D*4+3]=F}for(let D=0,W=x.length;D<W;++D){const U=x[D],F=U.start,R=U.count;for(let O=F,j=F+R;O<j;O+=3)A(n[O+0]),A(n[O+1]),A(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,s=new w,r=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?f=l[p]*o.data.stride+o.offset:f=l[p]*h;for(let _=0;_<h;_++)d[g++]=c[f++]}return new We(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Je,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const br=new Se,Ot=new Ji,Fi=new Yn,Tr=new w,ii=new w,si=new w,ri=new w,Ss=new w,Ni=new w,zi=new ie,Bi=new ie,Ui=new ie,bs=new w,Oi=new w;class Ae extends qe{constructor(e=new Je,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ni.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ss.fromBufferAttribute(u,e),r?Ni.addScaledVector(Ss,h):Ni.addScaledVector(Ss.sub(t),h))}t.add(Ni)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(s),Ot.copy(e.ray).recast(e.near),Fi.containsPoint(Ot.origin)===!1&&(Ot.intersectSphere(Fi,Tr)===null||Ot.origin.distanceToSquared(Tr)>(e.far-e.near)**2))||(br.copy(s).invert(),Ot.copy(e.ray).applyMatrix4(br),n.boundingBox!==null&&Ot.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let f=0,g=u.length;f<g;f++){const p=u[f],m=i[p.materialIndex],_=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=_,x=M;y<x;y+=3){const T=o.getX(y),C=o.getX(y+1),L=o.getX(y+2);r=Gi(this,m,e,Ot,c,h,T,C,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=f,m=g;p<m;p+=3){const _=o.getX(p),M=o.getX(p+1),y=o.getX(p+2);r=Gi(this,i,e,Ot,c,h,_,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,g=u.length;f<g;f++){const p=u[f],m=i[p.materialIndex],_=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=_,x=M;y<x;y+=3){const T=y,C=y+1,L=y+2;r=Gi(this,m,e,Ot,c,h,T,C,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=f,m=g;p<m;p+=3){const _=p,M=p+1,y=p+2;r=Gi(this,i,e,Ot,c,h,_,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ga(a,e,t,n,i,s,r,o){let l;if(e.side===1?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===0,o),l===null)return null;Oi.copy(o),Oi.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Oi);return c<t.near||c>t.far?null:{distance:c,point:Oi.clone(),object:a}}function Gi(a,e,t,n,i,s,r,o,l){a.getVertexPosition(r,ii),a.getVertexPosition(o,si),a.getVertexPosition(l,ri);const c=Ga(a,e,t,n,ii,si,ri,bs);if(c){i&&(zi.fromBufferAttribute(i,r),Bi.fromBufferAttribute(i,o),Ui.fromBufferAttribute(i,l),c.uv=Zt.getUV(bs,ii,si,ri,zi,Bi,Ui,new ie)),s&&(zi.fromBufferAttribute(s,r),Bi.fromBufferAttribute(s,o),Ui.fromBufferAttribute(s,l),c.uv2=Zt.getUV(bs,ii,si,ri,zi,Bi,Ui,new ie));const h={a:r,b:o,c:l,normal:new w,materialIndex:0};Zt.getNormal(ii,si,ri,h.normal),c.face=h}return c}class dn extends Je{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function g(p,m,_,M,y,x,T,C,L,v,A){const D=x/L,W=T/v,U=x/2,F=T/2,R=C/2,O=L+1,j=v+1;let J=0,q=0;const Z=new w;for(let Y=0;Y<j;Y++){const pe=Y*W-F;for(let B=0;B<O;B++){const K=B*D-U;Z[p]=K*M,Z[m]=pe*y,Z[_]=R,c.push(Z.x,Z.y,Z.z),Z[p]=0,Z[m]=0,Z[_]=C>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(B/L),u.push(1-Y/v),J+=1}}for(let Y=0;Y<v;Y++)for(let pe=0;pe<L;pe++){const B=d+pe+O*Y,K=d+pe+O*(Y+1),ne=d+(pe+1)+O*(Y+1),z=d+(pe+1)+O*Y;l.push(B,K,z),l.push(K,ne,z),q+=6}o.addGroup(f,q,A),f+=q,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wn(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gt(a){const e={};for(let t=0;t<a.length;t++){const n=Wn(a[t]);for(const i in n)e[i]=n[i]}return e}function ka(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Io(a){return a.getRenderTarget()===null&&a.outputEncoding===3001?Gt:yi}const Va={clone:Wn,merge:gt};var Ha=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Vt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ha,this.fragmentShader=Wa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wn(e.uniforms),this.uniformsGroups=ka(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fo extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class lt extends Fo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ui*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _i*2*Math.atan(Math.tan(ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ui*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nn=-90,zn=1;class qa extends qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new lt(Nn,zn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new lt(Nn,zn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new lt(Nn,zn,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new lt(Nn,zn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new lt(Nn,zn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new lt(Nn,zn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class No extends rt{constructor(e,t,n,i,s,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xa extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new No(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new dn(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Wn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const r=new Ae(i,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new qa(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Ts=new w,ja=new w,Ya=new yt;class xn{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ts.subVectors(n,t).cross(ja.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ts),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ya.getNormalMatrix(e),i=this.coplanarPoint(Ts).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Yn,ki=new w;class Ks{constructor(e=new xn,t=new xn,n=new xn,i=new xn,s=new xn,r=new xn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],g=n[10],p=n[11],m=n[12],_=n[13],M=n[14],y=n[15];return t[0].setComponents(o-i,u-l,p-d,y-m).normalize(),t[1].setComponents(o+i,u+l,p+d,y+m).normalize(),t[2].setComponents(o+s,u+c,p+f,y+_).normalize(),t[3].setComponents(o-s,u-c,p-f,y-_).normalize(),t[4].setComponents(o-r,u-h,p-g,y-M).normalize(),t[5].setComponents(o+r,u+h,p+g,y+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ki.x=i.normal.x>0?e.max.x:e.min.x,ki.y=i.normal.y>0?e.max.y:e.min.y,ki.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zo(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function $a(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=a.createBuffer();a.bindBuffer(h,f),a.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;a.bindBuffer(u,c),f.count===-1?a.bufferSubData(u,0,d):(t?a.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):a.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:r,remove:o,update:l}}class Zi extends Je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],p=[],m=[];for(let _=0;_<h;_++){const M=_*d-r;for(let y=0;y<c;y++){const x=y*u-s;g.push(x,-M,0),p.push(0,0,1),m.push(y/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<o;M++){const y=M+c*_,x=M+c*(_+1),T=M+1+c*(_+1),C=M+1+c*_;f.push(y,x,C),f.push(x,T,C)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ka=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ja=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Za=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qa=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,el=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nl="vec3 transformed = vec3( position );",il=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,rl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ol=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,al=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ll=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ul=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ml=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,gl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_l=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ml=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Al=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,El=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ll=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Il=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ul=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ol=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Gl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ql=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xl=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$l=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ql=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ec=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ic=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ac=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,hc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,mc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,yc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,_c=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Mc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ac=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ec=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ic=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Gc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,kc=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Vc=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Hc=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Wc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,qc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Xc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,jc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$c=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,th=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ih=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,oh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ah=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ch=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ph=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_h=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Th=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ah=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:Ka,alphamap_pars_fragment:Ja,alphatest_fragment:Za,alphatest_pars_fragment:Qa,aomap_fragment:el,aomap_pars_fragment:tl,begin_vertex:nl,beginnormal_vertex:il,bsdfs:sl,iridescence_fragment:rl,bumpmap_pars_fragment:ol,clipping_planes_fragment:al,clipping_planes_pars_fragment:ll,clipping_planes_pars_vertex:cl,clipping_planes_vertex:hl,color_fragment:ul,color_pars_fragment:dl,color_pars_vertex:fl,color_vertex:pl,common:ml,cube_uv_reflection_fragment:gl,defaultnormal_vertex:yl,displacementmap_pars_vertex:_l,displacementmap_vertex:xl,emissivemap_fragment:vl,emissivemap_pars_fragment:Ml,encodings_fragment:wl,encodings_pars_fragment:Sl,envmap_fragment:bl,envmap_common_pars_fragment:Tl,envmap_pars_fragment:Al,envmap_pars_vertex:El,envmap_physical_pars_fragment:Ol,envmap_vertex:Cl,fog_vertex:Ll,fog_pars_vertex:Pl,fog_fragment:Dl,fog_pars_fragment:Rl,gradientmap_pars_fragment:Il,lightmap_fragment:Fl,lightmap_pars_fragment:Nl,lights_lambert_fragment:zl,lights_lambert_pars_fragment:Bl,lights_pars_begin:Ul,lights_toon_fragment:Gl,lights_toon_pars_fragment:kl,lights_phong_fragment:Vl,lights_phong_pars_fragment:Hl,lights_physical_fragment:Wl,lights_physical_pars_fragment:ql,lights_fragment_begin:Xl,lights_fragment_maps:jl,lights_fragment_end:Yl,logdepthbuf_fragment:$l,logdepthbuf_pars_fragment:Kl,logdepthbuf_pars_vertex:Jl,logdepthbuf_vertex:Zl,map_fragment:Ql,map_pars_fragment:ec,map_particle_fragment:tc,map_particle_pars_fragment:nc,metalnessmap_fragment:ic,metalnessmap_pars_fragment:sc,morphcolor_vertex:rc,morphnormal_vertex:oc,morphtarget_pars_vertex:ac,morphtarget_vertex:lc,normal_fragment_begin:cc,normal_fragment_maps:hc,normal_pars_fragment:uc,normal_pars_vertex:dc,normal_vertex:fc,normalmap_pars_fragment:pc,clearcoat_normal_fragment_begin:mc,clearcoat_normal_fragment_maps:gc,clearcoat_pars_fragment:yc,iridescence_pars_fragment:_c,output_fragment:xc,packing:vc,premultiplied_alpha_fragment:Mc,project_vertex:wc,dithering_fragment:Sc,dithering_pars_fragment:bc,roughnessmap_fragment:Tc,roughnessmap_pars_fragment:Ac,shadowmap_pars_fragment:Ec,shadowmap_pars_vertex:Cc,shadowmap_vertex:Lc,shadowmask_pars_fragment:Pc,skinbase_vertex:Dc,skinning_pars_vertex:Rc,skinning_vertex:Ic,skinnormal_vertex:Fc,specularmap_fragment:Nc,specularmap_pars_fragment:zc,tonemapping_fragment:Bc,tonemapping_pars_fragment:Uc,transmission_fragment:Oc,transmission_pars_fragment:Gc,uv_pars_fragment:kc,uv_pars_vertex:Vc,uv_vertex:Hc,uv2_pars_fragment:Wc,uv2_pars_vertex:qc,uv2_vertex:Xc,worldpos_vertex:jc,background_vert:Yc,background_frag:$c,backgroundCube_vert:Kc,backgroundCube_frag:Jc,cube_vert:Zc,cube_frag:Qc,depth_vert:eh,depth_frag:th,distanceRGBA_vert:nh,distanceRGBA_frag:ih,equirect_vert:sh,equirect_frag:rh,linedashed_vert:oh,linedashed_frag:ah,meshbasic_vert:lh,meshbasic_frag:ch,meshlambert_vert:hh,meshlambert_frag:uh,meshmatcap_vert:dh,meshmatcap_frag:fh,meshnormal_vert:ph,meshnormal_frag:mh,meshphong_vert:gh,meshphong_frag:yh,meshphysical_vert:_h,meshphysical_frag:xh,meshtoon_vert:vh,meshtoon_frag:Mh,points_vert:wh,points_frag:Sh,shadow_vert:bh,shadow_frag:Th,sprite_vert:Ah,sprite_frag:Eh},te={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yt},uv2Transform:{value:new yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}}},kt={basic:{uniforms:gt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:gt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ye(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:gt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:gt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:gt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new ye(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:gt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:gt([te.points,te.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:gt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:gt([te.common,te.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:gt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:gt([te.sprite,te.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:gt([te.common,te.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:gt([te.lights,te.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};kt.physical={uniforms:gt([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Vi={r:0,b:0,g:0};function Ch(a,e,t,n,i,s,r){const o=new ye(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(m,_){let M=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const x=a.xr,T=x.getSession&&x.getSession();T&&T.environmentBlendMode==="additive"&&(y=null),y===null?p(o,l):y&&y.isColor&&(p(y,1),M=!0),(a.autoClear||M)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===306)?(h===void 0&&(h=new Ae(new dn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Wn(kt.backgroundCube.uniforms),vertexShader:kt.backgroundCube.vertexShader,fragmentShader:kt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,L,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=y.encoding!==3001,(u!==y||d!==y.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=a.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ae(new Zi(2,2),new un({name:"BackgroundMaterial",uniforms:Wn(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==3001,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(Vi,Io(a)),n.buffers.color.setClear(Vi.r,Vi.g,Vi.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(o,l)},render:g}}function Lh(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function u(R,O,j,J,q){let Z=!1;if(r){const Y=p(J,j,O);c!==Y&&(c=Y,f(c.object)),Z=_(R,J,j,q),Z&&M(R,J,j,q)}else{const Y=O.wireframe===!0;(c.geometry!==J.id||c.program!==j.id||c.wireframe!==Y)&&(c.geometry=J.id,c.program=j.id,c.wireframe=Y,Z=!0)}q!==null&&t.update(q,34963),(Z||h)&&(h=!1,v(R,O,j,J),q!==null&&a.bindBuffer(34963,t.get(q).buffer))}function d(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?a.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?a.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,O,j){const J=j.wireframe===!0;let q=o[R.id];q===void 0&&(q={},o[R.id]=q);let Z=q[O.id];Z===void 0&&(Z={},q[O.id]=Z);let Y=Z[J];return Y===void 0&&(Y=m(d()),Z[J]=Y),Y}function m(R){const O=[],j=[],J=[];for(let q=0;q<i;q++)O[q]=0,j[q]=0,J[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:J,object:R,attributes:{},index:null}}function _(R,O,j,J){const q=c.attributes,Z=O.attributes;let Y=0;const pe=j.getAttributes();for(const B in pe)if(pe[B].location>=0){const ne=q[B];let z=Z[B];if(z===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),ne===void 0||ne.attribute!==z||z&&ne.data!==z.data)return!0;Y++}return c.attributesNum!==Y||c.index!==J}function M(R,O,j,J){const q={},Z=O.attributes;let Y=0;const pe=j.getAttributes();for(const B in pe)if(pe[B].location>=0){let ne=Z[B];ne===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const z={};z.attribute=ne,ne&&ne.data&&(z.data=ne.data),q[B]=z,Y++}c.attributes=q,c.attributesNum=Y,c.index=J}function y(){const R=c.newAttributes;for(let O=0,j=R.length;O<j;O++)R[O]=0}function x(R){T(R,0)}function T(R,O){const j=c.newAttributes,J=c.enabledAttributes,q=c.attributeDivisors;j[R]=1,J[R]===0&&(a.enableVertexAttribArray(R),J[R]=1),q[R]!==O&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),q[R]=O)}function C(){const R=c.newAttributes,O=c.enabledAttributes;for(let j=0,J=O.length;j<J;j++)O[j]!==R[j]&&(a.disableVertexAttribArray(j),O[j]=0)}function L(R,O,j,J,q,Z){n.isWebGL2===!0&&(j===5124||j===5125)?a.vertexAttribIPointer(R,O,j,q,Z):a.vertexAttribPointer(R,O,j,J,q,Z)}function v(R,O,j,J){if(n.isWebGL2===!1&&(R.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const q=J.attributes,Z=j.getAttributes(),Y=O.defaultAttributeValues;for(const pe in Z){const B=Z[pe];if(B.location>=0){let K=q[pe];if(K===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),K!==void 0){const ne=K.normalized,z=K.itemSize,ce=t.get(K);if(ce===void 0)continue;const ae=ce.buffer,he=ce.type,ue=ce.bytesPerElement;if(K.isInterleavedBufferAttribute){const xe=K.data,Ee=xe.stride,Le=K.offset;if(xe.isInstancedInterleavedBuffer){for(let ze=0;ze<B.locationSize;ze++)T(B.location+ze,xe.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<B.locationSize;ze++)x(B.location+ze);a.bindBuffer(34962,ae);for(let ze=0;ze<B.locationSize;ze++)L(B.location+ze,z/B.locationSize,he,ne,Ee*ue,(Le+z/B.locationSize*ze)*ue)}else{if(K.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)T(B.location+xe,K.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xe=0;xe<B.locationSize;xe++)x(B.location+xe);a.bindBuffer(34962,ae);for(let xe=0;xe<B.locationSize;xe++)L(B.location+xe,z/B.locationSize,he,ne,z*ue,z/B.locationSize*xe*ue)}}else if(Y!==void 0){const ne=Y[pe];if(ne!==void 0)switch(ne.length){case 2:a.vertexAttrib2fv(B.location,ne);break;case 3:a.vertexAttrib3fv(B.location,ne);break;case 4:a.vertexAttrib4fv(B.location,ne);break;default:a.vertexAttrib1fv(B.location,ne)}}}}C()}function A(){U();for(const R in o){const O=o[R];for(const j in O){const J=O[j];for(const q in J)g(J[q].object),delete J[q];delete O[j]}delete o[R]}}function D(R){if(o[R.id]===void 0)return;const O=o[R.id];for(const j in O){const J=O[j];for(const q in J)g(J[q].object),delete J[q];delete O[j]}delete o[R.id]}function W(R){for(const O in o){const j=o[O];if(j[R.id]===void 0)continue;const J=j[R.id];for(const q in J)g(J[q].object),delete J[q];delete j[R.id]}}function U(){F(),h=!0,c!==l&&(c=l,f(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:U,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:W,initAttributes:y,enableAttribute:x,disableUnusedAttributes:C}}function Ph(a,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,h){a.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=a,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=r,this.render=o,this.renderInstances=l}function Dh(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=a.getParameter(34930),d=a.getParameter(35660),f=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),m=a.getParameter(36347),_=a.getParameter(36348),M=a.getParameter(36349),y=d>0,x=r||e.has("OES_texture_float"),T=y&&x,C=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:C}}function Rh(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new xn,o=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,p=u.clipIntersection,m=u.clipShadows,_=a.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,y=M*4;let x=_.clippingState||null;l.value=x,x=h(g,d,y,f);for(let T=0;T!==y;++T)x[T]=t[T];_.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const p=u!==null?u.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=f+p*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<_)&&(m=new Float32Array(_));for(let y=0,x=f;y!==p;++y,x+=4)r.copy(u[y]).applyMatrix4(M,o),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Ih(a){let e=new WeakMap;function t(r,o){return o===303?r.mapping=301:o===304&&(r.mapping=302),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===303||o===304)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Xa(l.height/2);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Js extends Fo{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const On=4,Ar=[.125,.215,.35,.446,.526,.582],Mn=20,As=new Js,Er=new ye;let Es=null;const vn=(1+Math.sqrt(5))/2,Un=1/vn,Cr=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,vn,Un),new w(0,vn,-Un),new w(Un,0,vn),new w(-Un,0,vn),new w(vn,Un,0),new w(-vn,Un,0)];class Lr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Es=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Es),e.scissorTest=!1,Hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Es=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},i=Pr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pr(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fh(s)),this._blurMaterial=Nh(s,e,t)}return i}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,n,i){const o=new lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Er),h.toneMapping=0,h.autoClear=!1;const f=new xt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new Ae(new dn,f);let p=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Er),p=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):M===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const y=this._cubeSize;Hi(i,M*y,_>2?y:0,y,y),h.setRenderTarget(i),p&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dr());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Ae(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Hi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,As)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Cr[(i-1)%Cr.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Mn-1),p=s/g,m=isFinite(s)?1+Math.floor(h*p):Mn;m>Mn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mn}`);const _=[];let M=0;for(let L=0;L<Mn;++L){const v=L/p,A=Math.exp(-v*v/2);_.push(A),L===0?M+=A:L<m&&(M+=2*A)}for(let L=0;L<_.length;L++)_[L]=_[L]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],T=3*x*(i>y-On?i-y+On:0),C=4*(this._cubeSize-x);Hi(t,T,C,3*x,2*x),l.setRenderTarget(t),l.render(u,As)}}function Fh(a){const e=[],t=[],n=[];let i=a;const s=a-On+1+Ar.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>a-On?l=Ar[r-a+On-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,p=3,m=2,_=1,M=new Float32Array(p*g*f),y=new Float32Array(m*g*f),x=new Float32Array(_*g*f);for(let C=0;C<f;C++){const L=C%3*2/3-1,v=C>2?0:-1,A=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];M.set(A,p*g*C),y.set(d,m*g*C);const D=[C,C,C,C,C,C];x.set(D,_*g*C)}const T=new Je;T.setAttribute("position",new We(M,p)),T.setAttribute("uv",new We(y,m)),T.setAttribute("faceIndex",new We(x,_)),e.push(T),i>On&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pr(a,e,t){const n=new wn(a,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Nh(a,e,t){const n=new Float32Array(Mn),i=new w(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dr(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rr(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zh(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Lr(a)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Lr(a));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Bh(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Uh(a,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const p=f[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let p=0;if(f!==null){const M=f.array;p=f.version;for(let y=0,x=M.length;y<x;y+=3){const T=M[y+0],C=M[y+1],L=M[y+2];d.push(T,C,C,L,L,T)}}else{const M=g.array;p=g.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const T=y+0,C=y+1,L=y+2;d.push(T,C,C,L,L,T)}}const m=new(Ao(d)?Ro:Do)(d,1);m.version=p;const _=s.get(u);_&&e.remove(_),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Oh(a,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,f){a.drawElements(s,f,o,d*l),t.update(f,s,1)}function u(d,f,g){if(g===0)return;let p,m;if(i)p=a,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,f,o,d*l,g),t.update(f,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u}function Gh(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kh(a,e){return a[0]-e[0]}function Vh(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Hh(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new Oe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==p){let O=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var f=O;m!==void 0&&m.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],v=h.morphAttributes.color||[];let A=0;y===!0&&(A=1),x===!0&&(A=2),T===!0&&(A=3);let D=h.attributes.position.count*A,W=1;D>e.maxTextureSize&&(W=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const U=new Float32Array(D*W*4*p),F=new Lo(U,D,W,p);F.type=1015,F.needsUpdate=!0;const R=A*4;for(let j=0;j<p;j++){const J=C[j],q=L[j],Z=v[j],Y=D*W*4*j;for(let pe=0;pe<J.count;pe++){const B=pe*R;y===!0&&(r.fromBufferAttribute(J,pe),U[Y+B+0]=r.x,U[Y+B+1]=r.y,U[Y+B+2]=r.z,U[Y+B+3]=0),x===!0&&(r.fromBufferAttribute(q,pe),U[Y+B+4]=r.x,U[Y+B+5]=r.y,U[Y+B+6]=r.z,U[Y+B+7]=0),T===!0&&(r.fromBufferAttribute(Z,pe),U[Y+B+8]=r.x,U[Y+B+9]=r.y,U[Y+B+10]=r.z,U[Y+B+11]=Z.itemSize===4?r.w:1)}}m={count:p,texture:F,size:new ie(D,W)},s.set(h,m),h.addEventListener("dispose",O)}let _=0;for(let y=0;y<d.length;y++)_+=d[y];const M=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(a,"morphTargetBaseInfluence",M),u.getUniforms().setValue(a,"morphTargetInfluences",d),u.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let x=0;x<g;x++)p[x]=[x,0];n[h.id]=p}for(let x=0;x<g;x++){const T=p[x];T[0]=x,T[1]=d[x]}p.sort(Vh);for(let x=0;x<8;x++)x<g&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(kh);const m=h.morphAttributes.position,_=h.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const T=o[x],C=T[0],L=T[1];C!==Number.MAX_SAFE_INTEGER&&L?(m&&h.getAttribute("morphTarget"+x)!==m[C]&&h.setAttribute("morphTarget"+x,m[C]),_&&h.getAttribute("morphNormal"+x)!==_[C]&&h.setAttribute("morphNormal"+x,_[C]),i[x]=L,M+=L):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),_&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const y=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(a,"morphTargetBaseInfluence",y),u.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Wh(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Bo=new rt,Uo=new Lo,Oo=new Pa,Go=new No,Ir=[],Fr=[],Nr=new Float32Array(16),zr=new Float32Array(9),Br=new Float32Array(4);function $n(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=Ir[i];if(s===void 0&&(s=new Float32Array(i),Ir[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Ze(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Qe(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Qi(a,e){let t=Fr[e];t===void 0&&(t=new Int32Array(e),Fr[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function qh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Xh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;a.uniform2fv(this.addr,e),Qe(t,e)}}function jh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ze(t,e))return;a.uniform3fv(this.addr,e),Qe(t,e)}}function Yh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;a.uniform4fv(this.addr,e),Qe(t,e)}}function $h(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Qe(t,e)}else{if(Ze(t,n))return;Br.set(n),a.uniformMatrix2fv(this.addr,!1,Br),Qe(t,n)}}function Kh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Qe(t,e)}else{if(Ze(t,n))return;zr.set(n),a.uniformMatrix3fv(this.addr,!1,zr),Qe(t,n)}}function Jh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Qe(t,e)}else{if(Ze(t,n))return;Nr.set(n),a.uniformMatrix4fv(this.addr,!1,Nr),Qe(t,n)}}function Zh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Qh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;a.uniform2iv(this.addr,e),Qe(t,e)}}function eu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ze(t,e))return;a.uniform3iv(this.addr,e),Qe(t,e)}}function tu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;a.uniform4iv(this.addr,e),Qe(t,e)}}function nu(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function iu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;a.uniform2uiv(this.addr,e),Qe(t,e)}}function su(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ze(t,e))return;a.uniform3uiv(this.addr,e),Qe(t,e)}}function ru(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;a.uniform4uiv(this.addr,e),Qe(t,e)}}function ou(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Bo,i)}function au(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Oo,i)}function lu(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Go,i)}function cu(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uo,i)}function hu(a){switch(a){case 5126:return qh;case 35664:return Xh;case 35665:return jh;case 35666:return Yh;case 35674:return $h;case 35675:return Kh;case 35676:return Jh;case 5124:case 35670:return Zh;case 35667:case 35671:return Qh;case 35668:case 35672:return eu;case 35669:case 35673:return tu;case 5125:return nu;case 36294:return iu;case 36295:return su;case 36296:return ru;case 35678:case 36198:case 36298:case 36306:case 35682:return ou;case 35679:case 36299:case 36307:return au;case 35680:case 36300:case 36308:case 36293:return lu;case 36289:case 36303:case 36311:case 36292:return cu}}function uu(a,e){a.uniform1fv(this.addr,e)}function du(a,e){const t=$n(e,this.size,2);a.uniform2fv(this.addr,t)}function fu(a,e){const t=$n(e,this.size,3);a.uniform3fv(this.addr,t)}function pu(a,e){const t=$n(e,this.size,4);a.uniform4fv(this.addr,t)}function mu(a,e){const t=$n(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function gu(a,e){const t=$n(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function yu(a,e){const t=$n(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function _u(a,e){a.uniform1iv(this.addr,e)}function xu(a,e){a.uniform2iv(this.addr,e)}function vu(a,e){a.uniform3iv(this.addr,e)}function Mu(a,e){a.uniform4iv(this.addr,e)}function wu(a,e){a.uniform1uiv(this.addr,e)}function Su(a,e){a.uniform2uiv(this.addr,e)}function bu(a,e){a.uniform3uiv(this.addr,e)}function Tu(a,e){a.uniform4uiv(this.addr,e)}function Au(a,e,t){const n=this.cache,i=e.length,s=Qi(t,i);Ze(n,s)||(a.uniform1iv(this.addr,s),Qe(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Bo,s[r])}function Eu(a,e,t){const n=this.cache,i=e.length,s=Qi(t,i);Ze(n,s)||(a.uniform1iv(this.addr,s),Qe(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Oo,s[r])}function Cu(a,e,t){const n=this.cache,i=e.length,s=Qi(t,i);Ze(n,s)||(a.uniform1iv(this.addr,s),Qe(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Go,s[r])}function Lu(a,e,t){const n=this.cache,i=e.length,s=Qi(t,i);Ze(n,s)||(a.uniform1iv(this.addr,s),Qe(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Uo,s[r])}function Pu(a){switch(a){case 5126:return uu;case 35664:return du;case 35665:return fu;case 35666:return pu;case 35674:return mu;case 35675:return gu;case 35676:return yu;case 5124:case 35670:return _u;case 35667:case 35671:return xu;case 35668:case 35672:return vu;case 35669:case 35673:return Mu;case 5125:return wu;case 36294:return Su;case 36295:return bu;case 36296:return Tu;case 35678:case 36198:case 36298:case 36306:case 35682:return Au;case 35679:case 36299:case 36307:return Eu;case 35680:case 36300:case 36308:case 36293:return Cu;case 36289:case 36303:case 36311:case 36292:return Lu}}class Du{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=hu(t.type)}}class Ru{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Pu(t.type)}}class Iu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Cs=/(\w+)(\])?(\[|\.)?/g;function Ur(a,e){a.seq.push(e),a.map[e.id]=e}function Fu(a,e,t){const n=a.name,i=n.length;for(Cs.lastIndex=0;;){const s=Cs.exec(n),r=Cs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Ur(t,c===void 0?new Du(o,a,e):new Ru(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new Iu(o),Ur(t,u)),t=u}}}class Ki{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Fu(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Or(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Nu=0;function zu(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Bu(a){switch(a){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Gr(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+zu(a.getShaderSource(e),r)}else return i}function Uu(a,e){const t=Bu(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ou(a,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gu(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hi).join(`
`)}function ku(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vu(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function hi(a){return a!==""}function kr(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vr(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Os(a){return a.replace(Hu,Wu)}function Wu(a,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Os(t)}const qu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hr(a){return a.replace(qu,Xu)}function Xu(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wr(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ju(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Yu(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $u(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Ku(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Ju(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zu(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=ju(t),c=Yu(t),h=$u(t),u=Ku(t),d=Ju(t),f=t.isWebGL2?"":Gu(t),g=ku(s),p=i.createProgram();let m,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(hi).join(`
`),m.length>0&&(m+=`
`),_=[f,g].filter(hi).join(`
`),_.length>0&&(_+=`
`)):(m=[Wr(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hi).join(`
`),_=[f,Wr(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?be.tonemapping_pars_fragment:"",t.toneMapping!==0?Ou("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,Uu("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hi).join(`
`)),r=Os(r),r=kr(r,t),r=Vr(r,t),o=Os(o),o=kr(o,t),o=Vr(o,t),r=Hr(r),o=Hr(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===fr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=M+m+r,x=M+_+o,T=Or(i,35633,y),C=Or(i,35632,x);if(i.attachShader(p,T),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(T).trim(),W=i.getShaderInfoLog(C).trim();let U=!0,F=!0;if(i.getProgramParameter(p,35714)===!1){U=!1;const R=Gr(i,T,"vertex"),O=Gr(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+R+`
`+O)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(D===""||W==="")&&(F=!1);F&&(this.diagnostics={runnable:U,programLog:A,vertexShader:{log:D,prefix:m},fragmentShader:{log:W,prefix:_}})}i.deleteShader(T),i.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new Ki(i,p)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=Vu(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Nu++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=C,this}let Qu=0;class ed{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new td(e),t.set(e,n)),n}}class td{constructor(e){this.id=Qu++,this.code=e,this.usedTimes=0}}function nd(a,e,t,n,i,s,r){const o=new $s,l=new ed,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,A,D,W,U){const F=W.fog,R=U.geometry,O=v.isMeshStandardMaterial?W.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||O),J=j&&j.mapping===306?j.image.height:null,q=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const Z=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Y=Z!==void 0?Z.length:0;let pe=0;R.morphAttributes.position!==void 0&&(pe=1),R.morphAttributes.normal!==void 0&&(pe=2),R.morphAttributes.color!==void 0&&(pe=3);let B,K,ne,z;if(q){const Ee=kt[q];B=Ee.vertexShader,K=Ee.fragmentShader}else B=v.vertexShader,K=v.fragmentShader,l.update(v),ne=l.getVertexShaderID(v),z=l.getFragmentShaderID(v);const ce=a.getRenderTarget(),ae=v.alphaTest>0,he=v.clearcoat>0,ue=v.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:v.type,vertexShader:B,fragmentShader:K,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:d,outputEncoding:ce===null?a.outputEncoding:ce.isXRRenderTarget===!0?ce.texture.encoding:3e3,map:!!v.map,matcap:!!v.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:J,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===1,tangentSpaceNormalMap:v.normalMapType===0,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===3001,clearcoat:he,clearcoatMap:he&&!!v.clearcoatMap,clearcoatRoughnessMap:he&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!v.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!v.iridescenceMap,iridescenceThicknessMap:ue&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===1,alphaMap:!!v.alphaMap,alphaTest:ae,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!F,useFog:v.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:pe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:0,useLegacyLights:a.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)A.push(D),A.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(A,v),M(A,v),A.push(a.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),v.push(o.mask)}function y(v){const A=g[v.type];let D;if(A){const W=kt[A];D=Va.clone(W.uniforms)}else D=v.uniforms;return D}function x(v,A){let D;for(let W=0,U=c.length;W<U;W++){const F=c[W];if(F.cacheKey===A){D=F,++D.usedTimes;break}}return D===void 0&&(D=new Zu(a,A,v,s),c.push(D)),D}function T(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:x,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:L}}function id(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function sd(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function qr(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Xr(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,f,g,p,m){let _=a[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:p,group:m},a[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=f,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=m),e++,_}function o(u,d,f,g,p,m){const _=r(u,d,f,g,p,m);f.transmission>0?n.push(_):f.transparent===!0?i.push(_):t.push(_)}function l(u,d,f,g,p,m){const _=r(u,d,f,g,p,m);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):t.unshift(_)}function c(u,d){t.length>1&&t.sort(u||sd),n.length>1&&n.sort(d||qr),i.length>1&&i.sort(d||qr)}function h(){for(let u=e,d=a.length;u<d;u++){const f=a[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function rd(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new Xr,a.set(n,[r])):i>=s.length?(r=new Xr,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function od(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ye};break;case"SpotLight":t={position:new w,direction:new w,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new w,halfWidth:new w,halfHeight:new w};break}return a[e.id]=t,t}}}function ad(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let ld=0;function cd(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function hd(a,e){const t=new od,n=ad(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new w);const s=new w,r=new Se,o=new Se;function l(h,u){let d=0,f=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let p=0,m=0,_=0,M=0,y=0,x=0,T=0,C=0,L=0,v=0;h.sort(cd);const A=u===!0?Math.PI:1;for(let W=0,U=h.length;W<U;W++){const F=h[W],R=F.color,O=F.intensity,j=F.distance,J=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=R.r*O*A,f+=R.g*O*A,g+=R.b*O*A;else if(F.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(F.sh.coefficients[q],O);else if(F.isDirectionalLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity*A),F.castShadow){const Z=F.shadow,Y=n.get(F);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=F.shadow.matrix,x++}i.directional[p]=q,p++}else if(F.isSpotLight){const q=t.get(F);q.position.setFromMatrixPosition(F.matrixWorld),q.color.copy(R).multiplyScalar(O*A),q.distance=j,q.coneCos=Math.cos(F.angle),q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),q.decay=F.decay,i.spot[_]=q;const Z=F.shadow;if(F.map&&(i.spotLightMap[L]=F.map,L++,Z.updateMatrices(F),F.castShadow&&v++),i.spotLightMatrix[_]=Z.matrix,F.castShadow){const Y=n.get(F);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=J,C++}_++}else if(F.isRectAreaLight){const q=t.get(F);q.color.copy(R).multiplyScalar(O),q.halfWidth.set(F.width*.5,0,0),q.halfHeight.set(0,F.height*.5,0),i.rectArea[M]=q,M++}else if(F.isPointLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity*A),q.distance=F.distance,q.decay=F.decay,F.castShadow){const Z=F.shadow,Y=n.get(F);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,i.pointShadow[m]=Y,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=F.shadow.matrix,T++}i.point[m]=q,m++}else if(F.isHemisphereLight){const q=t.get(F);q.skyColor.copy(F.color).multiplyScalar(O*A),q.groundColor.copy(F.groundColor).multiplyScalar(O*A),i.hemi[y]=q,y++}}M>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==y||D.numDirectionalShadows!==x||D.numPointShadows!==T||D.numSpotShadows!==C||D.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=C+L-v,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=v,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=y,D.numDirectionalShadows=x,D.numPointShadows=T,D.numSpotShadows=C,D.numSpotMaps=L,i.version=ld++)}function c(h,u){let d=0,f=0,g=0,p=0,m=0;const _=u.matrixWorldInverse;for(let M=0,y=h.length;M<y;M++){const x=h[M];if(x.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),d++}else if(x.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const T=i.rectArea[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(_),o.identity(),r.copy(x.matrixWorld),r.premultiply(_),o.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(_),f++}else if(x.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function jr(a,e){const t=new hd(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function ud(a,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new jr(a,e),t.set(s,[l])):r>=o.length?(l=new jr(a,e),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class dd extends Vt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fd extends Vt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,md=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gd(a,e,t){let n=new Ks;const i=new ie,s=new ie,r=new Oe,o=new dd({depthPacking:3201}),l=new fd,c={},h=t.maxTextureSize,u={0:1,1:0,2:2},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:pd,fragmentShader:md}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(x,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const L=a.getRenderTarget(),v=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),D=a.state;D.setBlending(0),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let W=0,U=x.length;W<U;W++){const F=x[W],R=F.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const O=R.getFrameExtents();if(i.multiply(O),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,R.mapSize.y=s.y)),R.map===null){const J=this.type!==3?{minFilter:1003,magFilter:1003}:{};R.map=new wn(i.x,i.y,J),R.map.texture.name=F.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const j=R.getViewportCount();for(let J=0;J<j;J++){const q=R.getViewport(J);r.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),D.viewport(r),R.updateMatrices(F,J),n=R.getFrustum(),y(T,C,R.camera,F,this.type)}R.isPointLightShadow!==!0&&this.type===3&&_(R,C),R.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(L,v,A)};function _(x,T){const C=e.update(p);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new wn(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(T,null,C,d,p,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(T,null,C,f,p,null)}function M(x,T,C,L,v,A){let D=null;const W=C.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(W!==void 0)D=W;else if(D=C.isPointLight===!0?l:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=D.uuid,F=T.uuid;let R=c[U];R===void 0&&(R={},c[U]=R);let O=R[F];O===void 0&&(O=D.clone(),R[F]=O),D=O}return D.visible=T.visible,D.wireframe=T.wireframe,A===3?D.side=T.shadowSide!==null?T.shadowSide:T.side:D.side=T.shadowSide!==null?T.shadowSide:u[T.side],D.alphaMap=T.alphaMap,D.alphaTest=T.alphaTest,D.map=T.map,D.clipShadows=T.clipShadows,D.clippingPlanes=T.clippingPlanes,D.clipIntersection=T.clipIntersection,D.displacementMap=T.displacementMap,D.displacementScale=T.displacementScale,D.displacementBias=T.displacementBias,D.wireframeLinewidth=T.wireframeLinewidth,D.linewidth=T.linewidth,C.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(C.matrixWorld),D.nearDistance=L,D.farDistance=v),D}function y(x,T,C,L,v){if(x.visible===!1)return;if(x.layers.test(T.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&v===3)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,x.matrixWorld);const W=e.update(x),U=x.material;if(Array.isArray(U)){const F=W.groups;for(let R=0,O=F.length;R<O;R++){const j=F[R],J=U[j.materialIndex];if(J&&J.visible){const q=M(x,J,L,C.near,C.far,v);a.renderBufferDirect(C,null,W,q,x,j)}}}else if(U.visible){const F=M(x,U,L,C.near,C.far,v);a.renderBufferDirect(C,null,W,F,x,null)}}const D=x.children;for(let W=0,U=D.length;W<U;W++)y(D[W],T,C,L,v)}}function yd(a,e,t){const n=t.isWebGL2;function i(){let P=!1;const k=new Oe;let $=null;const re=new Oe(0,0,0,0);return{setMask:function(le){$!==le&&!P&&(a.colorMask(le,le,le,le),$=le)},setLocked:function(le){P=le},setClear:function(le,ke,tt,dt,Bt){Bt===!0&&(le*=dt,ke*=dt,tt*=dt),k.set(le,ke,tt,dt),re.equals(k)===!1&&(a.clearColor(le,ke,tt,dt),re.copy(k))},reset:function(){P=!1,$=null,re.set(-1,0,0,0)}}}function s(){let P=!1,k=null,$=null,re=null;return{setTest:function(le){le?ae(2929):he(2929)},setMask:function(le){k!==le&&!P&&(a.depthMask(le),k=le)},setFunc:function(le){if($!==le){switch(le){case 0:a.depthFunc(512);break;case 1:a.depthFunc(519);break;case 2:a.depthFunc(513);break;case 3:a.depthFunc(515);break;case 4:a.depthFunc(514);break;case 5:a.depthFunc(518);break;case 6:a.depthFunc(516);break;case 7:a.depthFunc(517);break;default:a.depthFunc(515)}$=le}},setLocked:function(le){P=le},setClear:function(le){re!==le&&(a.clearDepth(le),re=le)},reset:function(){P=!1,k=null,$=null,re=null}}}function r(){let P=!1,k=null,$=null,re=null,le=null,ke=null,tt=null,dt=null,Bt=null;return{setTest:function(je){P||(je?ae(2960):he(2960))},setMask:function(je){k!==je&&!P&&(a.stencilMask(je),k=je)},setFunc:function(je,bt,Ut){($!==je||re!==bt||le!==Ut)&&(a.stencilFunc(je,bt,Ut),$=je,re=bt,le=Ut)},setOp:function(je,bt,Ut){(ke!==je||tt!==bt||dt!==Ut)&&(a.stencilOp(je,bt,Ut),ke=je,tt=bt,dt=Ut)},setLocked:function(je){P=je},setClear:function(je){Bt!==je&&(a.clearStencil(je),Bt=je)},reset:function(){P=!1,k=null,$=null,re=null,le=null,ke=null,tt=null,dt=null,Bt=null}}}const o=new i,l=new s,c=new r,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,p=[],m=null,_=!1,M=null,y=null,x=null,T=null,C=null,L=null,v=null,A=!1,D=null,W=null,U=null,F=null,R=null;const O=a.getParameter(35661);let j=!1,J=0;const q=a.getParameter(7938);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=J>=2);let Z=null,Y={};const pe=a.getParameter(3088),B=a.getParameter(2978),K=new Oe().fromArray(pe),ne=new Oe().fromArray(B);function z(P,k,$){const re=new Uint8Array(4),le=a.createTexture();a.bindTexture(P,le),a.texParameteri(P,10241,9728),a.texParameteri(P,10240,9728);for(let ke=0;ke<$;ke++)a.texImage2D(k+ke,0,6408,1,1,0,6408,5121,re);return le}const ce={};ce[3553]=z(3553,3553,1),ce[34067]=z(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ae(2929),l.setFunc(3),_t(!1),ut(1),ae(2884),ht(0);function ae(P){d[P]!==!0&&(a.enable(P),d[P]=!0)}function he(P){d[P]!==!1&&(a.disable(P),d[P]=!1)}function ue(P,k){return f[P]!==k?(a.bindFramebuffer(P,k),f[P]=k,n&&(P===36009&&(f[36160]=k),P===36160&&(f[36009]=k)),!0):!1}function xe(P,k){let $=p,re=!1;if(P)if($=g.get(k),$===void 0&&($=[],g.set(k,$)),P.isWebGLMultipleRenderTargets){const le=P.texture;if($.length!==le.length||$[0]!==36064){for(let ke=0,tt=le.length;ke<tt;ke++)$[ke]=36064+ke;$.length=le.length,re=!0}}else $[0]!==36064&&($[0]=36064,re=!0);else $[0]!==1029&&($[0]=1029,re=!0);re&&(t.isWebGL2?a.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ee(P){return m!==P?(a.useProgram(P),m=P,!0):!1}const Le={100:32774,101:32778,102:32779};if(n)Le[103]=32775,Le[104]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Le[103]=P.MIN_EXT,Le[104]=P.MAX_EXT)}const ze={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function ht(P,k,$,re,le,ke,tt,dt){if(P===0){_===!0&&(he(3042),_=!1);return}if(_===!1&&(ae(3042),_=!0),P!==5){if(P!==M||dt!==A){if((y!==100||C!==100)&&(a.blendEquation(32774),y=100,C=100),dt)switch(P){case 1:a.blendFuncSeparate(1,771,1,771);break;case 2:a.blendFunc(1,1);break;case 3:a.blendFuncSeparate(0,769,0,1);break;case 4:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case 1:a.blendFuncSeparate(770,771,1,771);break;case 2:a.blendFunc(770,1);break;case 3:a.blendFuncSeparate(0,769,0,1);break;case 4:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,T=null,L=null,v=null,M=P,A=dt}return}le=le||k,ke=ke||$,tt=tt||re,(k!==y||le!==C)&&(a.blendEquationSeparate(Le[k],Le[le]),y=k,C=le),($!==x||re!==T||ke!==L||tt!==v)&&(a.blendFuncSeparate(ze[$],ze[re],ze[ke],ze[tt]),x=$,T=re,L=ke,v=tt),M=P,A=!1}function Ct(P,k){P.side===2?he(2884):ae(2884);let $=P.side===1;k&&($=!$),_t($),P.blending===1&&P.transparent===!1?ht(0):ht(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const re=P.stencilWrite;c.setTest(re),re&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ve(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ae(32926):he(32926)}function _t(P){D!==P&&(P?a.frontFace(2304):a.frontFace(2305),D=P)}function ut(P){P!==0?(ae(2884),P!==W&&(P===1?a.cullFace(1029):P===2?a.cullFace(1028):a.cullFace(1032))):he(2884),W=P}function Xe(P){P!==U&&(j&&a.lineWidth(P),U=P)}function Ve(P,k,$){P?(ae(32823),(F!==k||R!==$)&&(a.polygonOffset(k,$),F=k,R=$)):he(32823)}function zt(P){P?ae(3089):he(3089)}function Lt(P){P===void 0&&(P=33984+O-1),Z!==P&&(a.activeTexture(P),Z=P)}function E(P,k,$){$===void 0&&(Z===null?$=33984+O-1:$=Z);let re=Y[$];re===void 0&&(re={type:void 0,texture:void 0},Y[$]=re),(re.type!==P||re.texture!==k)&&(Z!==$&&(a.activeTexture($),Z=$),a.bindTexture(P,k||ce[P]),re.type=P,re.texture=k)}function S(){const P=Y[Z];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function V(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{a.compressedTexImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{a.texSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{a.texSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{a.texStorage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{a.texStorage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(P){K.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function fe(P){ne.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),ne.copy(P))}function Fe(P,k){let $=u.get(k);$===void 0&&($=new WeakMap,u.set(k,$));let re=$.get(P);re===void 0&&(re=a.getUniformBlockIndex(k,P.name),$.set(P,re))}function He(P,k){const re=u.get(k).get(P);h.get(k)!==re&&(a.uniformBlockBinding(k,re,P.__bindingPointIndex),h.set(k,re))}function et(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},Z=null,Y={},f={},g=new WeakMap,p=[],m=null,_=!1,M=null,y=null,x=null,T=null,C=null,L=null,v=null,A=!1,D=null,W=null,U=null,F=null,R=null,K.set(0,0,a.canvas.width,a.canvas.height),ne.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ae,disable:he,bindFramebuffer:ue,drawBuffers:xe,useProgram:Ee,setBlending:ht,setMaterial:Ct,setFlipSided:_t,setCullFace:ut,setLineWidth:Xe,setPolygonOffset:Ve,setScissorTest:zt,activeTexture:Lt,bindTexture:E,unbindTexture:S,compressedTexImage2D:V,compressedTexImage3D:Q,texImage2D:de,texImage3D:Me,updateUBOMapping:Fe,uniformBlockBinding:He,texStorage2D:X,texStorage3D:ve,texSubImage2D:ee,texSubImage3D:se,compressedTexSubImage2D:me,compressedTexSubImage3D:oe,scissor:_e,viewport:fe,reset:et}}function _d(a,e,t,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,S){return _?new OffscreenCanvas(E,S):xi("canvas")}function y(E,S,V,Q){let ee=1;if((E.width>Q||E.height>Q)&&(ee=Q/Math.max(E.width,E.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const se=S?To:Math.floor,me=se(ee*E.width),oe=se(ee*E.height);p===void 0&&(p=M(me,oe));const X=V?M(me,oe):p;return X.width=me,X.height=oe,X.getContext("2d").drawImage(E,0,0,me,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+me+"x"+oe+")."),X}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function x(E){return Us(E.width)&&Us(E.height)}function T(E){return o?!1:E.wrapS!==1001||E.wrapT!==1001||E.minFilter!==1003&&E.minFilter!==1006}function C(E,S){return E.generateMipmaps&&S&&E.minFilter!==1003&&E.minFilter!==1006}function L(E){a.generateMipmap(E)}function v(E,S,V,Q,ee=!1){if(o===!1)return S;if(E!==null){if(a[E]!==void 0)return a[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=S;return S===6403&&(V===5126&&(se=33326),V===5131&&(se=33325),V===5121&&(se=33321)),S===33319&&(V===5126&&(se=33328),V===5131&&(se=33327),V===5121&&(se=33323)),S===6408&&(V===5126&&(se=34836),V===5131&&(se=34842),V===5121&&(se=Q===3001&&ee===!1?35907:32856),V===32819&&(se=32854),V===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function A(E,S,V){return C(E,V)===!0||E.isFramebufferTexture&&E.minFilter!==1003&&E.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function D(E){return E===1003||E===1004||E===1005?9728:9729}function W(E){const S=E.target;S.removeEventListener("dispose",W),F(S),S.isVideoTexture&&g.delete(S)}function U(E){const S=E.target;S.removeEventListener("dispose",U),O(S)}function F(E){const S=n.get(E);if(S.__webglInit===void 0)return;const V=E.source,Q=m.get(V);if(Q){const ee=Q[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(E),Object.keys(Q).length===0&&m.delete(V)}n.remove(E)}function R(E){const S=n.get(E);a.deleteTexture(S.__webglTexture);const V=E.source,Q=m.get(V);delete Q[S.__cacheKey],r.memory.textures--}function O(E){const S=E.texture,V=n.get(E),Q=n.get(S);if(Q.__webglTexture!==void 0&&(a.deleteTexture(Q.__webglTexture),r.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)a.deleteFramebuffer(V.__webglFramebuffer[ee]),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer[ee]);else{if(a.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&a.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ee=0;ee<V.__webglColorRenderbuffer.length;ee++)V.__webglColorRenderbuffer[ee]&&a.deleteRenderbuffer(V.__webglColorRenderbuffer[ee]);V.__webglDepthRenderbuffer&&a.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ee=0,se=S.length;ee<se;ee++){const me=n.get(S[ee]);me.__webglTexture&&(a.deleteTexture(me.__webglTexture),r.memory.textures--),n.remove(S[ee])}n.remove(S),n.remove(E)}let j=0;function J(){j=0}function q(){const E=j;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),j+=1,E}function Z(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function Y(E,S){const V=n.get(E);if(E.isVideoTexture&&zt(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(V,E,S);return}}t.bindTexture(3553,V.__webglTexture,33984+S)}function pe(E,S){const V=n.get(E);if(E.version>0&&V.__version!==E.version){he(V,E,S);return}t.bindTexture(35866,V.__webglTexture,33984+S)}function B(E,S){const V=n.get(E);if(E.version>0&&V.__version!==E.version){he(V,E,S);return}t.bindTexture(32879,V.__webglTexture,33984+S)}function K(E,S){const V=n.get(E);if(E.version>0&&V.__version!==E.version){ue(V,E,S);return}t.bindTexture(34067,V.__webglTexture,33984+S)}const ne={1e3:10497,1001:33071,1002:33648},z={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function ce(E,S,V){if(V?(a.texParameteri(E,10242,ne[S.wrapS]),a.texParameteri(E,10243,ne[S.wrapT]),(E===32879||E===35866)&&a.texParameteri(E,32882,ne[S.wrapR]),a.texParameteri(E,10240,z[S.magFilter]),a.texParameteri(E,10241,z[S.minFilter])):(a.texParameteri(E,10242,33071),a.texParameteri(E,10243,33071),(E===32879||E===35866)&&a.texParameteri(E,32882,33071),(S.wrapS!==1001||S.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(E,10240,D(S.magFilter)),a.texParameteri(E,10241,D(S.minFilter)),S.minFilter!==1003&&S.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(a.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ae(E,S){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",W));const Q=S.source;let ee=m.get(Q);ee===void 0&&(ee={},m.set(Q,ee));const se=Z(S);if(se!==E.__cacheKey){ee[se]===void 0&&(ee[se]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,V=!0),ee[se].usedTimes++;const me=ee[E.__cacheKey];me!==void 0&&(ee[E.__cacheKey].usedTimes--,me.usedTimes===0&&R(S)),E.__cacheKey=se,E.__webglTexture=ee[se].texture}return V}function he(E,S,V){let Q=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=35866),S.isData3DTexture&&(Q=32879);const ee=ae(E,S),se=S.source;t.bindTexture(Q,E.__webglTexture,33984+V);const me=n.get(se);if(se.version!==me.__version||ee===!0){t.activeTexture(33984+V),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const oe=T(S)&&x(S.image)===!1;let X=y(S.image,oe,!1,h);X=Lt(S,X);const ve=x(X)||o,de=s.convert(S.format,S.encoding);let Me=s.convert(S.type),_e=v(S.internalFormat,de,Me,S.encoding,S.isVideoTexture);ce(Q,S,ve);let fe;const Fe=S.mipmaps,He=o&&S.isVideoTexture!==!0,et=me.__version===void 0||ee===!0,P=A(S,X,ve);if(S.isDepthTexture)_e=6402,o?S.type===1015?_e=36012:S.type===1014?_e=33190:S.type===1020?_e=35056:_e=33189:S.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===1026&&_e===6402&&S.type!==1012&&S.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=1014,Me=s.convert(S.type)),S.format===1027&&_e===6402&&(_e=34041,S.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=1020,Me=s.convert(S.type))),et&&(He?t.texStorage2D(3553,1,_e,X.width,X.height):t.texImage2D(3553,0,_e,X.width,X.height,0,de,Me,null));else if(S.isDataTexture)if(Fe.length>0&&ve){He&&et&&t.texStorage2D(3553,P,_e,Fe[0].width,Fe[0].height);for(let k=0,$=Fe.length;k<$;k++)fe=Fe[k],He?t.texSubImage2D(3553,k,0,0,fe.width,fe.height,de,Me,fe.data):t.texImage2D(3553,k,_e,fe.width,fe.height,0,de,Me,fe.data);S.generateMipmaps=!1}else He?(et&&t.texStorage2D(3553,P,_e,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,de,Me,X.data)):t.texImage2D(3553,0,_e,X.width,X.height,0,de,Me,X.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&et&&t.texStorage3D(35866,P,_e,Fe[0].width,Fe[0].height,X.depth);for(let k=0,$=Fe.length;k<$;k++)fe=Fe[k],S.format!==1023?de!==null?He?t.compressedTexSubImage3D(35866,k,0,0,0,fe.width,fe.height,X.depth,de,fe.data,0,0):t.compressedTexImage3D(35866,k,_e,fe.width,fe.height,X.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(35866,k,0,0,0,fe.width,fe.height,X.depth,de,Me,fe.data):t.texImage3D(35866,k,_e,fe.width,fe.height,X.depth,0,de,Me,fe.data)}else{He&&et&&t.texStorage2D(3553,P,_e,Fe[0].width,Fe[0].height);for(let k=0,$=Fe.length;k<$;k++)fe=Fe[k],S.format!==1023?de!==null?He?t.compressedTexSubImage2D(3553,k,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(3553,k,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(3553,k,0,0,fe.width,fe.height,de,Me,fe.data):t.texImage2D(3553,k,_e,fe.width,fe.height,0,de,Me,fe.data)}else if(S.isDataArrayTexture)He?(et&&t.texStorage3D(35866,P,_e,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,de,Me,X.data)):t.texImage3D(35866,0,_e,X.width,X.height,X.depth,0,de,Me,X.data);else if(S.isData3DTexture)He?(et&&t.texStorage3D(32879,P,_e,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,de,Me,X.data)):t.texImage3D(32879,0,_e,X.width,X.height,X.depth,0,de,Me,X.data);else if(S.isFramebufferTexture){if(et)if(He)t.texStorage2D(3553,P,_e,X.width,X.height);else{let k=X.width,$=X.height;for(let re=0;re<P;re++)t.texImage2D(3553,re,_e,k,$,0,de,Me,null),k>>=1,$>>=1}}else if(Fe.length>0&&ve){He&&et&&t.texStorage2D(3553,P,_e,Fe[0].width,Fe[0].height);for(let k=0,$=Fe.length;k<$;k++)fe=Fe[k],He?t.texSubImage2D(3553,k,0,0,de,Me,fe):t.texImage2D(3553,k,_e,de,Me,fe);S.generateMipmaps=!1}else He?(et&&t.texStorage2D(3553,P,_e,X.width,X.height),t.texSubImage2D(3553,0,0,0,de,Me,X)):t.texImage2D(3553,0,_e,de,Me,X);C(S,ve)&&L(Q),me.__version=se.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ue(E,S,V){if(S.image.length!==6)return;const Q=ae(E,S),ee=S.source;t.bindTexture(34067,E.__webglTexture,33984+V);const se=n.get(ee);if(ee.version!==se.__version||Q===!0){t.activeTexture(33984+V),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const me=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,X=[];for(let k=0;k<6;k++)!me&&!oe?X[k]=y(S.image[k],!1,!0,c):X[k]=oe?S.image[k].image:S.image[k],X[k]=Lt(S,X[k]);const ve=X[0],de=x(ve)||o,Me=s.convert(S.format,S.encoding),_e=s.convert(S.type),fe=v(S.internalFormat,Me,_e,S.encoding),Fe=o&&S.isVideoTexture!==!0,He=se.__version===void 0||Q===!0;let et=A(S,ve,de);ce(34067,S,de);let P;if(me){Fe&&He&&t.texStorage2D(34067,et,fe,ve.width,ve.height);for(let k=0;k<6;k++){P=X[k].mipmaps;for(let $=0;$<P.length;$++){const re=P[$];S.format!==1023?Me!==null?Fe?t.compressedTexSubImage2D(34069+k,$,0,0,re.width,re.height,Me,re.data):t.compressedTexImage2D(34069+k,$,fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+k,$,0,0,re.width,re.height,Me,_e,re.data):t.texImage2D(34069+k,$,fe,re.width,re.height,0,Me,_e,re.data)}}}else{P=S.mipmaps,Fe&&He&&(P.length>0&&et++,t.texStorage2D(34067,et,fe,X[0].width,X[0].height));for(let k=0;k<6;k++)if(oe){Fe?t.texSubImage2D(34069+k,0,0,0,X[k].width,X[k].height,Me,_e,X[k].data):t.texImage2D(34069+k,0,fe,X[k].width,X[k].height,0,Me,_e,X[k].data);for(let $=0;$<P.length;$++){const le=P[$].image[k].image;Fe?t.texSubImage2D(34069+k,$+1,0,0,le.width,le.height,Me,_e,le.data):t.texImage2D(34069+k,$+1,fe,le.width,le.height,0,Me,_e,le.data)}}else{Fe?t.texSubImage2D(34069+k,0,0,0,Me,_e,X[k]):t.texImage2D(34069+k,0,fe,Me,_e,X[k]);for(let $=0;$<P.length;$++){const re=P[$];Fe?t.texSubImage2D(34069+k,$+1,0,0,Me,_e,re.image[k]):t.texImage2D(34069+k,$+1,fe,Me,_e,re.image[k])}}}C(S,de)&&L(34067),se.__version=ee.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function xe(E,S,V,Q,ee){const se=s.convert(V.format,V.encoding),me=s.convert(V.type),oe=v(V.internalFormat,se,me,V.encoding);n.get(S).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,oe,S.width,S.height,S.depth,0,se,me,null):t.texImage2D(ee,0,oe,S.width,S.height,0,se,me,null)),t.bindFramebuffer(36160,E),Ve(S)?d.framebufferTexture2DMultisampleEXT(36160,Q,ee,n.get(V).__webglTexture,0,Xe(S)):(ee===3553||ee>=34069&&ee<=34074)&&a.framebufferTexture2D(36160,Q,ee,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(E,S,V){if(a.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let Q=33189;if(V||Ve(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===1015?Q=36012:ee.type===1014&&(Q=33190));const se=Xe(S);Ve(S)?d.renderbufferStorageMultisampleEXT(36161,se,Q,S.width,S.height):a.renderbufferStorageMultisample(36161,se,Q,S.width,S.height)}else a.renderbufferStorage(36161,Q,S.width,S.height);a.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const Q=Xe(S);V&&Ve(S)===!1?a.renderbufferStorageMultisample(36161,Q,35056,S.width,S.height):Ve(S)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,S.width,S.height):a.renderbufferStorage(36161,34041,S.width,S.height),a.framebufferRenderbuffer(36160,33306,36161,E)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<Q.length;ee++){const se=Q[ee],me=s.convert(se.format,se.encoding),oe=s.convert(se.type),X=v(se.internalFormat,me,oe,se.encoding),ve=Xe(S);V&&Ve(S)===!1?a.renderbufferStorageMultisample(36161,ve,X,S.width,S.height):Ve(S)?d.renderbufferStorageMultisampleEXT(36161,ve,X,S.width,S.height):a.renderbufferStorage(36161,X,S.width,S.height)}}a.bindRenderbuffer(36161,null)}function Le(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const Q=n.get(S.depthTexture).__webglTexture,ee=Xe(S);if(S.depthTexture.format===1026)Ve(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ee):a.framebufferTexture2D(36160,36096,3553,Q,0);else if(S.depthTexture.format===1027)Ve(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ee):a.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function ze(E){const S=n.get(E),V=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Le(S.__webglFramebuffer,E)}else if(V){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=a.createRenderbuffer(),Ee(S.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),Ee(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function ht(E,S,V){const Q=n.get(E);S!==void 0&&xe(Q.__webglFramebuffer,E,E.texture,36064,3553),V!==void 0&&ze(E)}function Ct(E){const S=E.texture,V=n.get(E),Q=n.get(S);E.addEventListener("dispose",U),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=a.createTexture()),Q.__version=S.version,r.memory.textures++);const ee=E.isWebGLCubeRenderTarget===!0,se=E.isWebGLMultipleRenderTargets===!0,me=x(E)||o;if(ee){V.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)V.__webglFramebuffer[oe]=a.createFramebuffer()}else{if(V.__webglFramebuffer=a.createFramebuffer(),se)if(i.drawBuffers){const oe=E.texture;for(let X=0,ve=oe.length;X<ve;X++){const de=n.get(oe[X]);de.__webglTexture===void 0&&(de.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&Ve(E)===!1){const oe=se?S:[S];V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let X=0;X<oe.length;X++){const ve=oe[X];V.__webglColorRenderbuffer[X]=a.createRenderbuffer(),a.bindRenderbuffer(36161,V.__webglColorRenderbuffer[X]);const de=s.convert(ve.format,ve.encoding),Me=s.convert(ve.type),_e=v(ve.internalFormat,de,Me,ve.encoding,E.isXRRenderTarget===!0),fe=Xe(E);a.renderbufferStorageMultisample(36161,fe,_e,E.width,E.height),a.framebufferRenderbuffer(36160,36064+X,36161,V.__webglColorRenderbuffer[X])}a.bindRenderbuffer(36161,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),Ee(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,Q.__webglTexture),ce(34067,S,me);for(let oe=0;oe<6;oe++)xe(V.__webglFramebuffer[oe],E,S,36064,34069+oe);C(S,me)&&L(34067),t.unbindTexture()}else if(se){const oe=E.texture;for(let X=0,ve=oe.length;X<ve;X++){const de=oe[X],Me=n.get(de);t.bindTexture(3553,Me.__webglTexture),ce(3553,de,me),xe(V.__webglFramebuffer,E,de,36064+X,3553),C(de,me)&&L(3553)}t.unbindTexture()}else{let oe=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?oe=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Q.__webglTexture),ce(oe,S,me),xe(V.__webglFramebuffer,E,S,36064,oe),C(S,me)&&L(oe),t.unbindTexture()}E.depthBuffer&&ze(E)}function _t(E){const S=x(E)||o,V=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,ee=V.length;Q<ee;Q++){const se=V[Q];if(C(se,S)){const me=E.isWebGLCubeRenderTarget?34067:3553,oe=n.get(se).__webglTexture;t.bindTexture(me,oe),L(me),t.unbindTexture()}}}function ut(E){if(o&&E.samples>0&&Ve(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],V=E.width,Q=E.height;let ee=16384;const se=[],me=E.stencilBuffer?33306:36096,oe=n.get(E),X=E.isWebGLMultipleRenderTargets===!0;if(X)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ve,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ve,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){se.push(36064+ve),E.depthBuffer&&se.push(me);const de=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(de===!1&&(E.depthBuffer&&(ee|=256),E.stencilBuffer&&(ee|=1024)),X&&a.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[ve]),de===!0&&(a.invalidateFramebuffer(36008,[me]),a.invalidateFramebuffer(36009,[me])),X){const Me=n.get(S[ve]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Me,0)}a.blitFramebuffer(0,0,V,Q,0,0,V,Q,ee,9728),f&&a.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ve,36161,oe.__webglColorRenderbuffer[ve]);const de=n.get(S[ve]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ve,3553,de,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function Xe(E){return Math.min(u,E.samples)}function Ve(E){const S=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function zt(E){const S=r.render.frame;g.get(E)!==S&&(g.set(E,S),E.update())}function Lt(E,S){const V=E.encoding,Q=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===1035||V!==3e3&&(V===3001?o===!1?e.has("EXT_sRGB")===!0&&Q===1023?(E.format=1035,E.minFilter=1006,E.generateMipmaps=!1):S=Eo.sRGBToLinear(S):(Q!==1023||ee!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),S}this.allocateTextureUnit=q,this.resetTextureUnits=J,this.setTexture2D=Y,this.setTexture2DArray=pe,this.setTexture3D=B,this.setTextureCube=K,this.rebindTextures=ht,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ve}function xd(a,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===1009)return 5121;if(s===1017)return 32819;if(s===1018)return 32820;if(s===1010)return 5120;if(s===1011)return 5122;if(s===1012)return 5123;if(s===1013)return 5124;if(s===1014)return 5125;if(s===1015)return 5126;if(s===1016)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===1021)return 6406;if(s===1023)return 6408;if(s===1024)return 6409;if(s===1025)return 6410;if(s===1026)return 6402;if(s===1027)return 34041;if(s===1035)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===1028)return 6403;if(s===1029)return 36244;if(s===1030)return 33319;if(s===1031)return 33320;if(s===1033)return 36249;if(s===33776||s===33777||s===33778||s===33779)if(r===3001)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===33776)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===33777)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===33778)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===33779)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===33776)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===35840)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===37492||s===37496)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===37492)return r===3001?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===37496)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===37808)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===37809)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===37810)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===37811)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===37812)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===37813)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===37814)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===37815)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===37816)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===37817)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===37818)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===37819)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===37820)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===37821)return r===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===36492)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===36492)return r===3001?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===36283||s===36284||s===36285||s===36286)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===36492)return o.COMPRESSED_RED_RGTC1_EXT;if(s===36284)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===36285)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===36286)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===1020?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class vd extends lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class It extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Md={type:"move"};class Ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wd extends rt{constructor(e,t,n,i,s,r,o,l,c,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}class Sd extends jn{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const p=t.getContextAttributes();let m=null,_=null;const M=[],y=[],x=new Set,T=new Map,C=new lt;C.layers.enable(1),C.viewport=new Oe;const L=new lt;L.layers.enable(2),L.viewport=new Oe;const v=[C,L],A=new vd;A.layers.enable(1),A.layers.enable(2);let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=M[B];return K===void 0&&(K=new Ls,M[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=M[B];return K===void 0&&(K=new Ls,M[B]=K),K.getGripSpace()},this.getHand=function(B){let K=M[B];return K===void 0&&(K=new Ls,M[B]=K),K.getHandSpace()};function U(B){const K=y.indexOf(B.inputSource);if(K===-1)return;const ne=M[K];ne!==void 0&&ne.dispatchEvent({type:B.type,data:B.inputSource})}function F(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",R);for(let B=0;B<M.length;B++){const K=y[B];K!==null&&(y[B]=null,M[B].disconnect(K))}D=null,W=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,_=null,pe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",F),i.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),_=new wn(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let K=null,ne=null,z=null;p.depth&&(z=p.stencil?35056:33190,K=p.stencil?1027:1026,ne=p.stencil?1020:1014);const ce={colorFormat:32856,depthFormat:z,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ce),i.updateRenderState({layers:[d]}),_=new wn(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new wd(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const ae=e.properties.get(_);ae.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(B){for(let K=0;K<B.removed.length;K++){const ne=B.removed[K],z=y.indexOf(ne);z>=0&&(y[z]=null,M[z].disconnect(ne))}for(let K=0;K<B.added.length;K++){const ne=B.added[K];let z=y.indexOf(ne);if(z===-1){for(let ae=0;ae<M.length;ae++)if(ae>=y.length){y.push(ne),z=ae;break}else if(y[ae]===null){y[ae]=ne,z=ae;break}if(z===-1)break}const ce=M[z];ce&&ce.connect(ne)}}const O=new w,j=new w;function J(B,K,ne){O.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(ne.matrixWorld);const z=O.distanceTo(j),ce=K.projectionMatrix.elements,ae=ne.projectionMatrix.elements,he=ce[14]/(ce[10]-1),ue=ce[14]/(ce[10]+1),xe=(ce[9]+1)/ce[5],Ee=(ce[9]-1)/ce[5],Le=(ce[8]-1)/ce[0],ze=(ae[8]+1)/ae[0],ht=he*Le,Ct=he*ze,_t=z/(-Le+ze),ut=_t*-Le;K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ut),B.translateZ(_t),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Xe=he+_t,Ve=ue+_t,zt=ht-ut,Lt=Ct+(z-ut),E=xe*ue/Ve*Xe,S=Ee*ue/Ve*Xe;B.projectionMatrix.makePerspective(zt,Lt,E,S,Xe,Ve)}function q(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;A.near=L.near=C.near=B.near,A.far=L.far=C.far=B.far,(D!==A.near||W!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),D=A.near,W=A.far);const K=B.parent,ne=A.cameras;q(A,K);for(let ce=0;ce<ne.length;ce++)q(ne[ce],K);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),B.matrix.copy(A.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const z=B.children;for(let ce=0,ae=z.length;ce<ae;ce++)z[ce].updateMatrixWorld(!0);ne.length===2?J(A,C,L):A.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.getPlanes=function(){return x};let Z=null;function Y(B,K){if(h=K.getViewerPose(c||r),g=K,h!==null){const ne=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let z=!1;ne.length!==A.cameras.length&&(A.cameras.length=0,z=!0);for(let ce=0;ce<ne.length;ce++){const ae=ne[ce];let he=null;if(f!==null)he=f.getViewport(ae);else{const xe=u.getViewSubImage(d,ae);he=xe.viewport,ce===0&&(e.setRenderTargetTextures(_,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(_))}let ue=v[ce];ue===void 0&&(ue=new lt,ue.layers.enable(ce),ue.viewport=new Oe,v[ce]=ue),ue.matrix.fromArray(ae.transform.matrix),ue.projectionMatrix.fromArray(ae.projectionMatrix),ue.viewport.set(he.x,he.y,he.width,he.height),ce===0&&A.matrix.copy(ue.matrix),z===!0&&A.cameras.push(ue)}}for(let ne=0;ne<M.length;ne++){const z=y[ne],ce=M[ne];z!==null&&ce!==void 0&&ce.update(z,K,c||r)}if(Z&&Z(B,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let ne=null;for(const z of x)K.detectedPlanes.has(z)||(ne===null&&(ne=[]),ne.push(z));if(ne!==null)for(const z of ne)x.delete(z),T.delete(z),n.dispatchEvent({type:"planeremoved",data:z});for(const z of K.detectedPlanes)if(!x.has(z))x.add(z),T.set(z,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:z});else{const ce=T.get(z);z.lastChangedTime>ce&&(T.set(z,z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:z}))}}g=null}const pe=new zo;pe.setAnimationLoop(Y),this.setAnimationLoop=function(B){Z=B},this.dispose=function(){}}}function bd(a,e){function t(p,m){m.color.getRGB(p.fogColor.value,Io(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),h(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(i(p,m),f(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&r(p,m)):m.isPointsMaterial?o(p,m,_,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=a.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let M;m.map?M=m.map:m.specularMap?M=m.specularMap:m.displacementMap?M=m.displacementMap:m.normalMap?M=m.normalMap:m.bumpMap?M=m.bumpMap:m.roughnessMap?M=m.roughnessMap:m.metalnessMap?M=m.metalnessMap:m.alphaMap?M=m.alphaMap:m.emissiveMap?M=m.emissiveMap:m.clearcoatMap?M=m.clearcoatMap:m.clearcoatNormalMap?M=m.clearcoatNormalMap:m.clearcoatRoughnessMap?M=m.clearcoatRoughnessMap:m.iridescenceMap?M=m.iridescenceMap:m.iridescenceThicknessMap?M=m.iridescenceThicknessMap:m.specularIntensityMap?M=m.specularIntensityMap:m.specularColorMap?M=m.specularColorMap:m.transmissionMap?M=m.transmissionMap:m.thicknessMap?M=m.thicknessMap:m.sheenColorMap?M=m.sheenColorMap:m.sheenRoughnessMap&&(M=m.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function r(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===1&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Td(a,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(M,y){const x=y.program;n.uniformBlockBinding(M,x)}function c(M,y){let x=i[M.id];x===void 0&&(g(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(M,T);const C=e.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function h(M){const y=u();M.__bindingPointIndex=y;const x=a.createBuffer(),T=M.__size,C=M.usage;return a.bindBuffer(35345,x),a.bufferData(35345,T,C),a.bindBuffer(35345,null),a.bindBufferBase(35345,y,x),x}function u(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=i[M.id],x=M.uniforms,T=M.__cache;a.bindBuffer(35345,y);for(let C=0,L=x.length;C<L;C++){const v=x[C];if(f(v,C,T)===!0){const A=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let W=0;for(let U=0;U<D.length;U++){const F=D[U],R=p(F);typeof F=="number"?(v.__data[0]=F,a.bufferSubData(35345,A+W,v.__data)):F.isMatrix3?(v.__data[0]=F.elements[0],v.__data[1]=F.elements[1],v.__data[2]=F.elements[2],v.__data[3]=F.elements[0],v.__data[4]=F.elements[3],v.__data[5]=F.elements[4],v.__data[6]=F.elements[5],v.__data[7]=F.elements[0],v.__data[8]=F.elements[6],v.__data[9]=F.elements[7],v.__data[10]=F.elements[8],v.__data[11]=F.elements[0]):(F.toArray(v.__data,W),W+=R.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,A,v.__data)}}a.bindBuffer(35345,null)}function f(M,y,x){const T=M.value;if(x[y]===void 0){if(typeof T=="number")x[y]=T;else{const C=Array.isArray(T)?T:[T],L=[];for(let v=0;v<C.length;v++)L.push(C[v].clone());x[y]=L}return!0}else if(typeof T=="number"){if(x[y]!==T)return x[y]=T,!0}else{const C=Array.isArray(x[y])?x[y]:[x[y]],L=Array.isArray(T)?T:[T];for(let v=0;v<C.length;v++){const A=C[v];if(A.equals(L[v])===!1)return A.copy(L[v]),!0}}return!1}function g(M){const y=M.uniforms;let x=0;const T=16;let C=0;for(let L=0,v=y.length;L<v;L++){const A=y[L],D={boundary:0,storage:0},W=Array.isArray(A.value)?A.value:[A.value];for(let U=0,F=W.length;U<F;U++){const R=W[U],O=p(R);D.boundary+=O.boundary,D.storage+=O.storage}if(A.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=x,L>0){C=x%T;const U=T-C;C!==0&&U-D.boundary<0&&(x+=T-C,A.__offset=x)}x+=D.storage}return C=x%T,C>0&&(x+=T-C),M.__size=x,M.__cache={},this}function p(M){const y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const M in i)a.deleteBuffer(i[M]);r=[],i={},s={}}return{bind:l,update:c,dispose:_}}function Ad(){const a=xi("canvas");return a.style.display="block",a}function Qs(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Ad(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.useLegacyLights=!0,this.toneMapping=0,this.toneMappingExposure=1;const p=this;let m=!1,_=0,M=0,y=null,x=-1,T=null;const C=new Oe,L=new Oe;let v=null,A=e.width,D=e.height,W=1,U=null,F=null;const R=new Oe(0,0,A,D),O=new Oe(0,0,A,D);let j=!1;const J=new Ks;let q=!1,Z=!1,Y=null;const pe=new Se,B=new w,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return y===null?W:1}let z=t;function ce(b,N){for(let G=0;G<b.length;G++){const I=b[G],H=e.getContext(I,N);if(H!==null)return H}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${js}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",fe,!1),z===null){const N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),z=ce(N,b),z===null)throw ce(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ae,he,ue,xe,Ee,Le,ze,ht,Ct,_t,ut,Xe,Ve,zt,Lt,E,S,V,Q,ee,se,me,oe,X;function ve(){ae=new Bh(z),he=new Dh(z,ae,a),ae.init(he),me=new xd(z,ae,he),ue=new yd(z,ae,he),xe=new Gh,Ee=new id,Le=new _d(z,ae,ue,Ee,he,me,xe),ze=new Ih(p),ht=new zh(p),Ct=new $a(z,he),oe=new Lh(z,ae,Ct,he),_t=new Uh(z,Ct,xe,oe),ut=new Wh(z,_t,Ct,xe),Q=new Hh(z,he,Le),E=new Rh(Ee),Xe=new nd(p,ze,ht,ae,he,oe,E),Ve=new bd(p,Ee),zt=new rd,Lt=new ud(ae,he),V=new Ch(p,ze,ht,ue,ut,h,r),S=new gd(p,ut,he),X=new Td(z,xe,he,ue),ee=new Ph(z,ae,xe,he),se=new Oh(z,ae,xe,he),xe.programs=Xe.programs,p.capabilities=he,p.extensions=ae,p.properties=Ee,p.renderLists=zt,p.shadowMap=S,p.state=ue,p.info=xe}ve();const de=new Sd(p,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(A,D,!1))},this.getSize=function(b){return b.set(A,D)},this.setSize=function(b,N,G=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,D=N,e.width=Math.floor(b*W),e.height=Math.floor(N*W),G===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(A*W,D*W).floor()},this.setDrawingBufferSize=function(b,N,G){A=b,D=N,W=G,e.width=Math.floor(b*G),e.height=Math.floor(N*G),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(R)},this.setViewport=function(b,N,G,I){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,N,G,I),ue.viewport(C.copy(R).multiplyScalar(W).floor())},this.getScissor=function(b){return b.copy(O)},this.setScissor=function(b,N,G,I){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,N,G,I),ue.scissor(L.copy(O).multiplyScalar(W).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(b){ue.setScissorTest(j=b)},this.setOpaqueSort=function(b){U=b},this.setTransparentSort=function(b){F=b},this.getClearColor=function(b){return b.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(b=!0,N=!0,G=!0){let I=0;b&&(I|=16384),N&&(I|=256),G&&(I|=1024),z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),zt.dispose(),Lt.dispose(),Ee.dispose(),ze.dispose(),ht.dispose(),ut.dispose(),oe.dispose(),X.dispose(),Xe.dispose(),de.dispose(),de.removeEventListener("sessionstart",$),de.removeEventListener("sessionend",re),Y&&(Y.dispose(),Y=null),le.stop()};function Me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const b=xe.autoReset,N=S.enabled,G=S.autoUpdate,I=S.needsUpdate,H=S.type;ve(),xe.autoReset=b,S.enabled=N,S.autoUpdate=G,S.needsUpdate=I,S.type=H}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Fe(b){const N=b.target;N.removeEventListener("dispose",Fe),He(N)}function He(b){et(b),Ee.remove(b)}function et(b){const N=Ee.get(b).programs;N!==void 0&&(N.forEach(function(G){Xe.releaseProgram(G)}),b.isShaderMaterial&&Xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,G,I,H,ge){N===null&&(N=K);const we=H.isMesh&&H.matrixWorld.determinant()<0,Te=oa(b,N,G,I,H);ue.setMaterial(I,we);let Ce=G.index,Ne=1;I.wireframe===!0&&(Ce=_t.getWireframeAttribute(G),Ne=2);const Pe=G.drawRange,De=G.attributes.position;let Ye=Pe.start*Ne,vt=(Pe.start+Pe.count)*Ne;ge!==null&&(Ye=Math.max(Ye,ge.start*Ne),vt=Math.min(vt,(ge.start+ge.count)*Ne)),Ce!==null?(Ye=Math.max(Ye,0),vt=Math.min(vt,Ce.count)):De!=null&&(Ye=Math.max(Ye,0),vt=Math.min(vt,De.count));const qt=vt-Ye;if(qt<0||qt===1/0)return;oe.setup(H,I,Te,G,Ce);let fn,$e=ee;if(Ce!==null&&(fn=Ct.get(Ce),$e=se,$e.setIndex(fn)),H.isMesh)I.wireframe===!0?(ue.setLineWidth(I.wireframeLinewidth*ne()),$e.setMode(1)):$e.setMode(4);else if(H.isLine){let Re=I.linewidth;Re===void 0&&(Re=1),ue.setLineWidth(Re*ne()),H.isLineSegments?$e.setMode(1):H.isLineLoop?$e.setMode(2):$e.setMode(3)}else H.isPoints?$e.setMode(0):H.isSprite&&$e.setMode(4);if(H.isInstancedMesh)$e.renderInstances(Ye,qt,H.count);else if(G.isInstancedBufferGeometry){const Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,is=Math.min(G.instanceCount,Re);$e.renderInstances(Ye,qt,is)}else $e.render(Ye,qt)},this.compile=function(b,N){function G(I,H,ge){I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,bt(I,H,ge),I.side=0,I.needsUpdate=!0,bt(I,H,ge),I.side=2):bt(I,H,ge)}d=Lt.get(b),d.init(),g.push(d),b.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(p.useLegacyLights),b.traverse(function(I){const H=I.material;if(H)if(Array.isArray(H))for(let ge=0;ge<H.length;ge++){const we=H[ge];G(we,b,I)}else G(H,b,I)}),g.pop(),d=null};let P=null;function k(b){P&&P(b)}function $(){le.stop()}function re(){le.start()}const le=new zo;le.setAnimationLoop(k),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(b){P=b,de.setAnimationLoop(b),b===null?le.stop():le.start()},de.addEventListener("sessionstart",$),de.addEventListener("sessionend",re),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(N),N=de.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,N,y),d=Lt.get(b,g.length),d.init(),g.push(d),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),J.setFromProjectionMatrix(pe),Z=this.localClippingEnabled,q=E.init(this.clippingPlanes,Z),u=zt.get(b,f.length),u.init(),f.push(u),ke(b,N,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(U,F),q===!0&&E.beginShadows();const G=d.state.shadowsArray;if(S.render(G,b,N),q===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(u,b),d.setupLights(p.useLegacyLights),N.isArrayCamera){const I=N.cameras;for(let H=0,ge=I.length;H<ge;H++){const we=I[H];tt(u,b,we,we.viewport)}}else tt(u,b,N);y!==null&&(Le.updateMultisampleRenderTarget(y),Le.updateRenderTargetMipmap(y)),b.isScene===!0&&b.onAfterRender(p,b,N),oe.resetDefaultState(),x=-1,T=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function ke(b,N,G,I){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){I&&B.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const we=ut.update(b),Te=b.material;Te.visible&&u.push(b,we,Te,G,B.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==xe.render.frame&&(b.skeleton.update(),b.skeleton.frame=xe.render.frame),!b.frustumCulled||J.intersectsObject(b))){I&&B.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const we=ut.update(b),Te=b.material;if(Array.isArray(Te)){const Ce=we.groups;for(let Ne=0,Pe=Ce.length;Ne<Pe;Ne++){const De=Ce[Ne],Ye=Te[De.materialIndex];Ye&&Ye.visible&&u.push(b,we,Ye,G,B.z,De)}}else Te.visible&&u.push(b,we,Te,G,B.z,null)}}const ge=b.children;for(let we=0,Te=ge.length;we<Te;we++)ke(ge[we],N,G,I)}function tt(b,N,G,I){const H=b.opaque,ge=b.transmissive,we=b.transparent;d.setupLightsView(G),q===!0&&E.setGlobalState(p.clippingPlanes,G),ge.length>0&&dt(H,N,G),I&&ue.viewport(C.copy(I)),H.length>0&&Bt(H,N,G),ge.length>0&&Bt(ge,N,G),we.length>0&&Bt(we,N,G),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function dt(b,N,G){const I=he.isWebGL2;Y===null&&(Y=new wn(1024,1024,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:I&&s===!0?4:0}));const H=p.getRenderTarget();p.setRenderTarget(Y),p.clear();const ge=p.toneMapping;p.toneMapping=0,Bt(b,N,G),p.toneMapping=ge,Le.updateMultisampleRenderTarget(Y),Le.updateRenderTargetMipmap(Y),p.setRenderTarget(H)}function Bt(b,N,G){const I=N.isScene===!0?N.overrideMaterial:null;for(let H=0,ge=b.length;H<ge;H++){const we=b[H],Te=we.object,Ce=we.geometry,Ne=I===null?we.material:I,Pe=we.group;Te.layers.test(G.layers)&&je(Te,N,G,Ce,Ne,Pe)}}function je(b,N,G,I,H,ge){b.onBeforeRender(p,N,G,I,H,ge),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(p,N,G,I,b,ge),H.transparent===!0&&H.side===2&&H.forceSinglePass===!1?(H.side=1,H.needsUpdate=!0,p.renderBufferDirect(G,N,I,H,b,ge),H.side=0,H.needsUpdate=!0,p.renderBufferDirect(G,N,I,H,b,ge),H.side=2):p.renderBufferDirect(G,N,I,H,b,ge),b.onAfterRender(p,N,G,I,H,ge)}function bt(b,N,G){N.isScene!==!0&&(N=K);const I=Ee.get(b),H=d.state.lights,ge=d.state.shadowsArray,we=H.state.version,Te=Xe.getParameters(b,H.state,ge,N,G),Ce=Xe.getProgramCacheKey(Te);let Ne=I.programs;I.environment=b.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(b.isMeshStandardMaterial?ht:ze).get(b.envMap||I.environment),Ne===void 0&&(b.addEventListener("dispose",Fe),Ne=new Map,I.programs=Ne);let Pe=Ne.get(Ce);if(Pe!==void 0){if(I.currentProgram===Pe&&I.lightsStateVersion===we)return Ut(b,Te),Pe}else Te.uniforms=Xe.getUniforms(b),b.onBuild(G,Te,p),b.onBeforeCompile(Te,p),Pe=Xe.acquireProgram(Te,Ce),Ne.set(Ce,Pe),I.uniforms=Te.uniforms;const De=I.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=E.uniform),Ut(b,Te),I.needsLights=la(b),I.lightsStateVersion=we,I.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMap.value=H.state.directionalShadowMap,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotShadowMap.value=H.state.spotShadowMap,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMap.value=H.state.pointShadowMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix);const Ye=Pe.getUniforms(),vt=Ki.seqWithValue(Ye.seq,De);return I.currentProgram=Pe,I.uniformsList=vt,Pe}function Ut(b,N){const G=Ee.get(b);G.outputEncoding=N.outputEncoding,G.instancing=N.instancing,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function oa(b,N,G,I,H){N.isScene!==!0&&(N=K),Le.resetTextureUnits();const ge=N.fog,we=I.isMeshStandardMaterial?N.environment:null,Te=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:3e3,Ce=(I.isMeshStandardMaterial?ht:ze).get(I.envMap||we),Ne=I.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pe=!!I.normalMap&&!!G.attributes.tangent,De=!!G.morphAttributes.position,Ye=!!G.morphAttributes.normal,vt=!!G.morphAttributes.color,qt=I.toneMapped?p.toneMapping:0,fn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$e=fn!==void 0?fn.length:0,Re=Ee.get(I),is=d.state.lights;if(q===!0&&(Z===!0||b!==T)){const Mt=b===T&&I.id===x;E.setState(I,b,Mt)}let nt=!1;I.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==is.state.version||Re.outputEncoding!==Te||H.isInstancedMesh&&Re.instancing===!1||!H.isInstancedMesh&&Re.instancing===!0||H.isSkinnedMesh&&Re.skinning===!1||!H.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Ce||I.fog===!0&&Re.fog!==ge||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==E.numPlanes||Re.numIntersection!==E.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==Pe||Re.morphTargets!==De||Re.morphNormals!==Ye||Re.morphColors!==vt||Re.toneMapping!==qt||he.isWebGL2===!0&&Re.morphTargetsCount!==$e)&&(nt=!0):(nt=!0,Re.__version=I.version);let pn=Re.currentProgram;nt===!0&&(pn=bt(I,N,H));let ur=!1,Zn=!1,ss=!1;const ft=pn.getUniforms(),mn=Re.uniforms;if(ue.useProgram(pn.program)&&(ur=!0,Zn=!0,ss=!0),I.id!==x&&(x=I.id,Zn=!0),ur||T!==b){if(ft.setValue(z,"projectionMatrix",b.projectionMatrix),he.logarithmicDepthBuffer&&ft.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),T!==b&&(T=b,Zn=!0,ss=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Mt=ft.map.cameraPosition;Mt!==void 0&&Mt.setValue(z,B.setFromMatrixPosition(b.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&ft.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||H.isSkinnedMesh)&&ft.setValue(z,"viewMatrix",b.matrixWorldInverse)}if(H.isSkinnedMesh){ft.setOptional(z,H,"bindMatrix"),ft.setOptional(z,H,"bindMatrixInverse");const Mt=H.skeleton;Mt&&(he.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),ft.setValue(z,"boneTexture",Mt.boneTexture,Le),ft.setValue(z,"boneTextureSize",Mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const rs=G.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0&&he.isWebGL2===!0)&&Q.update(H,G,pn),(Zn||Re.receiveShadow!==H.receiveShadow)&&(Re.receiveShadow=H.receiveShadow,ft.setValue(z,"receiveShadow",H.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(mn.envMap.value=Ce,mn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Zn&&(ft.setValue(z,"toneMappingExposure",p.toneMappingExposure),Re.needsLights&&aa(mn,ss),ge&&I.fog===!0&&Ve.refreshFogUniforms(mn,ge),Ve.refreshMaterialUniforms(mn,I,W,D,Y),Ki.upload(z,Re.uniformsList,mn,Le)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Ki.upload(z,Re.uniformsList,mn,Le),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&ft.setValue(z,"center",H.center),ft.setValue(z,"modelViewMatrix",H.modelViewMatrix),ft.setValue(z,"normalMatrix",H.normalMatrix),ft.setValue(z,"modelMatrix",H.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Mt=I.uniformsGroups;for(let os=0,ca=Mt.length;os<ca;os++)if(he.isWebGL2){const dr=Mt[os];X.update(dr,pn),X.bind(dr,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function aa(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function la(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(b,N,G){Ee.get(b.texture).__webglTexture=N,Ee.get(b.depthTexture).__webglTexture=G;const I=Ee.get(b);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=G===void 0,I.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){const G=Ee.get(b);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,G=0){y=b,_=N,M=G;let I=!0,H=null,ge=!1,we=!1;if(b){const Ce=Ee.get(b);Ce.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),I=!1):Ce.__webglFramebuffer===void 0?Le.setupRenderTarget(b):Ce.__hasExternalTextures&&Le.rebindTextures(b,Ee.get(b.texture).__webglTexture,Ee.get(b.depthTexture).__webglTexture);const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(we=!0);const Pe=Ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(H=Pe[N],ge=!0):he.isWebGL2&&b.samples>0&&Le.useMultisampledRTT(b)===!1?H=Ee.get(b).__webglMultisampledFramebuffer:H=Pe,C.copy(b.viewport),L.copy(b.scissor),v=b.scissorTest}else C.copy(R).multiplyScalar(W).floor(),L.copy(O).multiplyScalar(W).floor(),v=j;if(ue.bindFramebuffer(36160,H)&&he.drawBuffers&&I&&ue.drawBuffers(b,H),ue.viewport(C),ue.scissor(L),ue.setScissorTest(v),ge){const Ce=Ee.get(b.texture);z.framebufferTexture2D(36160,36064,34069+N,Ce.__webglTexture,G)}else if(we){const Ce=Ee.get(b.texture),Ne=N||0;z.framebufferTextureLayer(36160,36064,Ce.__webglTexture,G||0,Ne)}x=-1},this.readRenderTargetPixels=function(b,N,G,I,H,ge,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){ue.bindFramebuffer(36160,Te);try{const Ce=b.texture,Ne=Ce.format,Pe=Ce.type;if(Ne!==1023&&me.convert(Ne)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===1016&&(ae.has("EXT_color_buffer_half_float")||he.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Pe!==1009&&me.convert(Pe)!==z.getParameter(35738)&&!(Pe===1015&&(he.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-I&&G>=0&&G<=b.height-H&&z.readPixels(N,G,I,H,me.convert(Ne),me.convert(Pe),ge)}finally{const Ce=y!==null?Ee.get(y).__webglFramebuffer:null;ue.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(b,N,G=0){const I=Math.pow(2,-G),H=Math.floor(N.image.width*I),ge=Math.floor(N.image.height*I);Le.setTexture2D(N,0),z.copyTexSubImage2D(3553,G,0,0,b.x,b.y,H,ge),ue.unbindTexture()},this.copyTextureToTexture=function(b,N,G,I=0){const H=N.image.width,ge=N.image.height,we=me.convert(G.format),Te=me.convert(G.type);Le.setTexture2D(G,0),z.pixelStorei(37440,G.flipY),z.pixelStorei(37441,G.premultiplyAlpha),z.pixelStorei(3317,G.unpackAlignment),N.isDataTexture?z.texSubImage2D(3553,I,b.x,b.y,H,ge,we,Te,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(3553,I,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,we,N.mipmaps[0].data):z.texSubImage2D(3553,I,b.x,b.y,we,Te,N.image),I===0&&G.generateMipmaps&&z.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(b,N,G,I,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=b.max.x-b.min.x+1,we=b.max.y-b.min.y+1,Te=b.max.z-b.min.z+1,Ce=me.convert(I.format),Ne=me.convert(I.type);let Pe;if(I.isData3DTexture)Le.setTexture3D(I,0),Pe=32879;else if(I.isDataArrayTexture)Le.setTexture2DArray(I,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,I.flipY),z.pixelStorei(37441,I.premultiplyAlpha),z.pixelStorei(3317,I.unpackAlignment);const De=z.getParameter(3314),Ye=z.getParameter(32878),vt=z.getParameter(3316),qt=z.getParameter(3315),fn=z.getParameter(32877),$e=G.isCompressedTexture?G.mipmaps[0]:G.image;z.pixelStorei(3314,$e.width),z.pixelStorei(32878,$e.height),z.pixelStorei(3316,b.min.x),z.pixelStorei(3315,b.min.y),z.pixelStorei(32877,b.min.z),G.isDataTexture||G.isData3DTexture?z.texSubImage3D(Pe,H,N.x,N.y,N.z,ge,we,Te,Ce,Ne,$e.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Pe,H,N.x,N.y,N.z,ge,we,Te,Ce,$e.data)):z.texSubImage3D(Pe,H,N.x,N.y,N.z,ge,we,Te,Ce,Ne,$e),z.pixelStorei(3314,De),z.pixelStorei(32878,Ye),z.pixelStorei(3316,vt),z.pixelStorei(3315,qt),z.pixelStorei(32877,fn),H===0&&I.generateMipmaps&&z.generateMipmap(Pe),ue.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Le.setTextureCube(b,0):b.isData3DTexture?Le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Le.setTexture2DArray(b,0):Le.setTexture2D(b,0),ue.unbindTexture()},this.resetState=function(){_=0,M=0,y=null,ue.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Qs.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class Ed extends Qs{}Ed.prototype.isWebGL1Renderer=!0;class Cd extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ld{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ft()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mt=new w;class er{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}setX(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new We(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new er(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yr=new w,$r=new Oe,Kr=new Oe,Pd=new w,Jr=new Se;class Dd extends Ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Se,this.bindMatrixInverse=new Se}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Oe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;$r.fromBufferAttribute(i.attributes.skinIndex,e),Kr.fromBufferAttribute(i.attributes.skinWeight,e),Yr.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Kr.getComponent(s);if(r!==0){const o=$r.getComponent(s);Jr.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Pd.copy(Yr).applyMatrix4(Jr),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ko extends qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rd extends rt{constructor(e=null,t=1,n=1,i,s,r,o,l,c=1003,h=1003,u,d){super(null,r,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zr=new Se,Id=new Se;class tr{constructor(e=[],t=[]){this.uuid=Ft(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Se)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Se;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:Id;Zr.multiplyMatrices(o,t[s]),Zr.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=bo(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rd(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new ko),this.bones.push(r),this.boneInverses.push(new Se().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Qr extends We{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const eo=new Se,to=new Se,Wi=[],Fd=new Se,oi=new Ae;class Nd extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Fd)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(oi.geometry=this.geometry,oi.material=this.material,oi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,eo),to.multiplyMatrices(n,eo),oi.matrixWorld=to,oi.raycast(e,Wi);for(let r=0,o=Wi.length;r<o;r++){const l=Wi[r];l.instanceId=s,l.object=this,t.push(l)}Wi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends Vt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const no=new w,io=new w,so=new Se,Ps=new Ji,qi=new Yn;class ts extends qe{constructor(e=new Je,t=new es){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)no.fromBufferAttribute(t,i-1),io.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=no.distanceTo(io);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(i),qi.radius+=s,e.ray.intersectsSphere(qi)===!1)return;so.copy(i).invert(),Ps.copy(e.ray).applyMatrix4(so);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new w,h=new w,u=new w,d=new w,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),M=Math.min(g.count,r.start+r.count);for(let y=_,x=M-1;y<x;y+=f){const T=g.getX(y),C=g.getX(y+1);if(c.fromBufferAttribute(m,T),h.fromBufferAttribute(m,C),Ps.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),M=Math.min(m.count,r.start+r.count);for(let y=_,x=M-1;y<x;y+=f){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Ps.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const ro=new w,oo=new w;class Vo extends ts{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ro.fromBufferAttribute(t,i),oo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ro.distanceTo(oo);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zd extends ts{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vi extends Vt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ao=new Se,Gs=new Ji,Xi=new Yn,ji=new w;class fi extends qe{constructor(e=new Je,t=new vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(i),Xi.radius+=s,e.ray.intersectsSphere(Xi)===!1)return;ao.copy(i).invert(),Gs.copy(e.ray).applyMatrix4(ao);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,p=f;g<p;g++){const m=c.getX(g);ji.fromBufferAttribute(u,m),lo(ji,m,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,p=f;g<p;g++)ji.fromBufferAttribute(u,g),lo(ji,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lo(a,e,t,n,i,s,r){const o=Gs.distanceSqToPoint(a);if(o<t){const l=new w;Gs.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class Bd extends rt{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ht{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),l=t||(r.isVector2?new ie:new w);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],s=[],r=[],o=new w,l=new Se;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new w)}s[0]=new w,r[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(st(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(st(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nr extends Ht{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new ie,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ud extends nr{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ir(){let a=0,e=0,t=0,n=0;function i(s,r,o,l){a=s,e=o,t=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){i(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,h,u){let d=(r-s)/c-(o-s)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+u)+(l-o)/u;d*=h,f*=h,i(r,o,d,f)},calc:function(s){const r=s*s,o=r*s;return a+e*s+t*r+n*o}}}const Yi=new w,Ds=new ir,Rs=new ir,Is=new ir;class Od extends Ht{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Yi.subVectors(i[0],i[1]).add(i[0]),c=Yi);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Yi.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Yi),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Ds.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,p,m),Rs.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,p,m),Is.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,p,m)}else this.curveType==="catmullrom"&&(Ds.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Rs.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Is.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ds.calc(l),Rs.calc(l),Is.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function co(a,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*o+s*a+t}function Gd(a,e){const t=1-a;return t*t*e}function kd(a,e){return 2*(1-a)*a*e}function Vd(a,e){return a*a*e}function pi(a,e,t,n){return Gd(a,e)+kd(a,t)+Vd(a,n)}function Hd(a,e){const t=1-a;return t*t*t*e}function Wd(a,e){const t=1-a;return 3*t*t*a*e}function qd(a,e){return 3*(1-a)*a*a*e}function Xd(a,e){return a*a*a*e}function mi(a,e,t,n,i){return Hd(a,e)+Wd(a,t)+qd(a,n)+Xd(a,i)}class Ho extends Ht{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(mi(e,i.x,s.x,r.x,o.x),mi(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jd extends Ht{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(mi(e,i.x,s.x,r.x,o.x),mi(e,i.y,s.y,r.y,o.y),mi(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sr extends Ht{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yd extends Ht{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wo extends Ht{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(pi(e,i.x,s.x,r.x),pi(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $d extends Ht{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(pi(e,i.x,s.x,r.x),pi(e,i.y,s.y,r.y),pi(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qo extends Ht{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(co(o,l.x,c.x,h.x,u.x),co(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ie().fromArray(i))}return this}}var Kd=Object.freeze({__proto__:null,ArcCurve:Ud,CatmullRomCurve3:Od,CubicBezierCurve:Ho,CubicBezierCurve3:jd,EllipseCurve:nr,LineCurve:sr,LineCurve3:Yd,QuadraticBezierCurve:Wo,QuadraticBezierCurve3:$d,SplineCurve:qo});class Jd extends Ht{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new sr(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Kd[i.type]().fromJSON(i))}return this}}class Zd extends Jd{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sr(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Wo(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const o=new Ho(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new qo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,r,o,l),this}absellipse(e,t,n,i,s,r,o,l){const c=new nr(e,t,n,i,s,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class rr extends Je{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=st(i,0,Math.PI*2);const s=[],r=[],o=[],l=[],c=[],h=1/t,u=new w,d=new ie,f=new w,g=new w,p=new w;let m=0,_=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,_=e[M+1].y-e[M].y,f.x=_*1,f.y=-m,f.z=_*0,p.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(p.x,p.y,p.z);break;default:m=e[M+1].x-e[M].x,_=e[M+1].y-e[M].y,f.x=_*1,f.y=-m,f.z=_*0,g.copy(f),f.x+=p.x,f.y+=p.y,f.z+=p.z,f.normalize(),l.push(f.x,f.y,f.z),p.copy(g)}for(let M=0;M<=t;M++){const y=n+M*h*i,x=Math.sin(y),T=Math.cos(y);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*x,u.y=e[C].y,u.z=e[C].x*T,r.push(u.x,u.y,u.z),d.x=M/t,d.y=C/(e.length-1),o.push(d.x,d.y);const L=l[3*C+0]*x,v=l[3*C+1],A=l[3*C+0]*T;c.push(L,v,A)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){const x=y+M*e.length,T=x,C=x+e.length,L=x+e.length+1,v=x+1;s.push(T,C,v),s.push(L,v,C)}this.setIndex(s),this.setAttribute("position",new Ge(r,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.points,e.segments,e.phiStart,e.phiLength)}}class gi extends rr{constructor(e=1,t=1,n=4,i=8){const s=new Zd;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new gi(e.radius,e.length,e.capSegments,e.radialSegments)}}class qn extends Je{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const p=[],m=n/2;let _=0;M(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function M(){const x=new w,T=new w;let C=0;const L=(t-e)/n;for(let v=0;v<=s;v++){const A=[],D=v/s,W=D*(t-e)+e;for(let U=0;U<=i;U++){const F=U/i,R=F*l+o,O=Math.sin(R),j=Math.cos(R);T.x=W*O,T.y=-D*n+m,T.z=W*j,u.push(T.x,T.y,T.z),x.set(O,L,j).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-D),A.push(g++)}p.push(A)}for(let v=0;v<i;v++)for(let A=0;A<s;A++){const D=p[A][v],W=p[A+1][v],U=p[A+1][v+1],F=p[A][v+1];h.push(D,W,F),h.push(W,U,F),C+=6}c.addGroup(_,C,0),_+=C}function y(x){const T=g,C=new ie,L=new w;let v=0;const A=x===!0?e:t,D=x===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*D,0),d.push(0,D,0),f.push(.5,.5),g++;const W=g;for(let U=0;U<=i;U++){const R=U/i*l+o,O=Math.cos(R),j=Math.sin(R);L.x=A*j,L.y=m*D,L.z=A*O,u.push(L.x,L.y,L.z),d.push(0,D,0),C.x=O*.5+.5,C.y=j*.5*D+.5,f.push(C.x,C.y),g++}for(let U=0;U<i;U++){const F=T+U,R=W+U;x===!0?h.push(R,R+1,F):h.push(R+1,R,F),v+=3}c.addGroup(_,v,x===!0?1:2),_+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mi extends qn{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Mi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class or extends Je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];o(i),c(n),h(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new w,x=new w,T=new w;for(let C=0;C<t.length;C+=3)f(t[C+0],y),f(t[C+1],x),f(t[C+2],T),l(y,x,T,M)}function l(M,y,x,T){const C=T+1,L=[];for(let v=0;v<=C;v++){L[v]=[];const A=M.clone().lerp(x,v/C),D=y.clone().lerp(x,v/C),W=C-v;for(let U=0;U<=W;U++)U===0&&v===C?L[v][U]=A:L[v][U]=A.clone().lerp(D,U/W)}for(let v=0;v<C;v++)for(let A=0;A<2*(C-v)-1;A++){const D=Math.floor(A/2);A%2===0?(d(L[v][D+1]),d(L[v+1][D]),d(L[v][D])):(d(L[v][D+1]),d(L[v+1][D+1]),d(L[v+1][D]))}}function c(M){const y=new w;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(M),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function h(){const M=new w;for(let y=0;y<s.length;y+=3){M.x=s[y+0],M.y=s[y+1],M.z=s[y+2];const x=m(M)/2/Math.PI+.5,T=_(M)/Math.PI+.5;r.push(x,1-T)}g(),u()}function u(){for(let M=0;M<r.length;M+=6){const y=r[M+0],x=r[M+2],T=r[M+4],C=Math.max(y,x,T),L=Math.min(y,x,T);C>.9&&L<.1&&(y<.2&&(r[M+0]+=1),x<.2&&(r[M+2]+=1),T<.2&&(r[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,y){const x=M*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const M=new w,y=new w,x=new w,T=new w,C=new ie,L=new ie,v=new ie;for(let A=0,D=0;A<s.length;A+=9,D+=6){M.set(s[A+0],s[A+1],s[A+2]),y.set(s[A+3],s[A+4],s[A+5]),x.set(s[A+6],s[A+7],s[A+8]),C.set(r[D+0],r[D+1]),L.set(r[D+2],r[D+3]),v.set(r[D+4],r[D+5]),T.copy(M).add(y).add(x).divideScalar(3);const W=m(T);p(C,D+0,M,W),p(L,D+2,y,W),p(v,D+4,x,W)}}function p(M,y,x,T){T<0&&M.x===1&&(r[y]=M.x-1),x.x===0&&x.z===0&&(r[y]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function _(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.vertices,e.indices,e.radius,e.details)}}class ar extends or{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ar(e.radius,e.detail)}}class en extends Je{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new w,d=new w,f=[],g=[],p=[],m=[];for(let _=0;_<=n;_++){const M=[],y=_/n;let x=0;_==0&&r==0?x=.5/t:_==n&&l==Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const C=T/t;u.x=-e*Math.cos(i+C*s)*Math.sin(r+y*o),u.y=e*Math.cos(r+y*o),u.z=e*Math.sin(i+C*s)*Math.sin(r+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),p.push(d.x,d.y,d.z),m.push(C+x,1-y),M.push(c++)}h.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const y=h[_][M+1],x=h[_][M],T=h[_+1][M],C=h[_+1][M+1];(_!==0||r>0)&&f.push(y,x,C),(_!==n-1||l<Math.PI)&&f.push(x,T,C)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ct extends Vt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tn extends ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function an(a,e,t){return Xo(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function $i(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Xo(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Qd(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ho(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[r++]=a[o+l]}return i}function jo(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class bi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ef extends bi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-n;break;case 2402:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:r=e,l=2*n-t;break;case 2402:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-d*m+2*d*p-d*g,M=(1+d)*m+(-1.5-2*d)*p+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*p+.5*g,x=f*m-f*p;for(let T=0;T!==o;++T)s[T]=_*r[h+T]+M*r[c+T]+y*r[l+T]+x*r[u+T];return s}}class tf extends bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class nf extends bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$i(t,this.TimeBufferType),this.values=$i(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$i(e.times,Array),values:$i(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ef(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=an(n,s,r),this.values=an(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&Xo(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=an(this.times),t=an(this.values),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const p=t[u+g];if(p!==t[d+g]||p!==t[f+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const u=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=an(e,0,r),this.values=an(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=an(this.times,0),t=an(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wt.prototype.TimeBufferType=Float32Array;Wt.prototype.ValueBufferType=Float32Array;Wt.prototype.DefaultInterpolation=2301;class Kn extends Wt{}Kn.prototype.ValueTypeName="bool";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=2300;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;class Yo extends Wt{}Yo.prototype.ValueTypeName="color";class wi extends Wt{}wi.prototype.ValueTypeName="number";class sf extends bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Nt.slerpFlat(s,0,r,c-o,r,c,l);return s}}class Sn extends Wt{InterpolantFactoryMethodLinear(e){return new sf(this.times,this.values,this.getValueSize(),e)}}Sn.prototype.ValueTypeName="quaternion";Sn.prototype.DefaultInterpolation=2301;Sn.prototype.InterpolantFactoryMethodSmooth=void 0;class Jn extends Wt{}Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=2300;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;class Si extends Wt{}Si.prototype.ValueTypeName="vector";class rf{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ft(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(af(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Wt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Qd(l);l=ho(l,1,h),c=ho(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new wi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,p){if(f.length!==0){const m=[],_=[];jo(f,m,_,g),m.length!==0&&p.push(new u(d,m,_))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)f[d[g].morphTargets[p]]=-1;for(const p in f){const m=[],_=[];for(let M=0;M!==d[g].morphTargets.length;++M){const y=d[g];m.push(y.time),_.push(y.morphTarget===p?1:0)}i.push(new wi(".morphTargetInfluence["+p+"]",m,_))}l=f.length*r}else{const f=".bones["+t[u].name+"]";n(Si,f+".position",d,"pos",i),n(Sn,f+".quaternion",d,"rot",i),n(Si,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function of(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return Si;case"color":return Yo;case"quaternion":return Sn;case"bool":case"boolean":return Kn;case"string":return Jn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function af(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=of(a.type);if(a.times===void 0){const t=[],n=[];jo(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Xn={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class lf{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const cf=new lf;class Ti{constructor(e){this.manager=e!==void 0?e:cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Jt={};class hf extends Error{constructor(e,t){super(e),this.response=t}}class $o extends Ti{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Jt[e]!==void 0){Jt[e].push({onLoad:t,onProgress:n,onError:i});return}Jt[e]=[],Jt[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Jt[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let p=0;const m=new ReadableStream({start(_){M();function M(){u.read().then(({done:y,value:x})=>{if(y)_.close();else{p+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let C=0,L=h.length;C<L;C++){const v=h[C];v.onProgress&&v.onProgress(T)}_.enqueue(x),M()}})}}});return new Response(m)}else throw new hf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Xn.add(e,c);const h=Jt[e];delete Jt[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Jt[e];if(h===void 0)throw this.manager.itemError(e),c;delete Jt[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class uf extends Ti{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Xn.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=xi("img");function l(){h(),Xn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Ko extends Ti{constructor(e){super(e)}load(e,t,n,i){const s=new rt,r=new uf(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ns extends qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Fs=new Se,uo=new w,fo=new w;class lr{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uo.setFromMatrixPosition(e.matrixWorld),t.position.copy(uo),fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fo),t.updateMatrixWorld(),Fs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class df extends lr{constructor(){super(new lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=_i*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ff extends ns{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new df}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const po=new Se,ai=new w,Ns=new w;class pf extends lr{constructor(){super(new lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ai.setFromMatrixPosition(e.matrixWorld),n.position.copy(ai),Ns.copy(n.position),Ns.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ns),n.updateMatrixWorld(),i.makeTranslation(-ai.x,-ai.y,-ai.z),po.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po)}}class Gn extends ns{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mf extends lr{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jo extends ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new mf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gf extends ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ks{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yf extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Xn.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Xn.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class _f{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mo(){return(typeof performance>"u"?Date:performance).now()}const cr="\\[\\]\\.:\\/",xf=new RegExp("["+cr+"]","g"),hr="[^"+cr+"]",vf="[^"+cr.replace("\\.","")+"]",Mf=/((?:WC+[\/:])*)/.source.replace("WC",hr),wf=/(WCOD+)?/.source.replace("WCOD",vf),Sf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hr),bf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hr),Tf=new RegExp("^"+Mf+wf+Sf+bf+"$"),Af=["material","materials","bones","map"];class Ef{constructor(e,t,n){const i=n||Be.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Be{constructor(e,t,n){this.path=t,this.parsedPath=n||Be.parseTrackName(t),this.node=Be.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Be.Composite(e,t,n):new Be(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xf,"")}static parseTrackName(e){const t=Tf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Af.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Be.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Be.Composite=Ef;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zo{constructor(e,t,n=0,i=1/0){this.ray=new Ji(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Vs(e,this,n,t),n.sort(go),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Vs(e[i],this,n,t);return n.sort(go),n}}function go(a,e){return a.distance-e.distance}function Vs(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)Vs(i[s],e,t,!0)}}class Cf extends Vo{constructor(e=10,t=10,n=4473924,i=8947848){n=new ye(n),i=new ye(i);const s=t/2,r=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const p=d===s?n:i;p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3}const h=new Je;h.setAttribute("position",new Ge(l,3)),h.setAttribute("color",new Ge(c,3));const u=new es({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=js);function yo(a,e){if(e===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===2||e===1){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===2)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class Hs extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new If(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Wf(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=ks.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new $o(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qo){try{r[Ie.KHR_BINARY_GLTF]=new qf(e)}catch(u){i&&i(u);return}s=JSON.parse(r[Ie.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sp(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ie.KHR_MATERIALS_UNLIT:r[u]=new Df;break;case Ie.KHR_DRACO_MESH_COMPRESSION:r[u]=new Xf(s,this.dracoLoader);break;case Ie.KHR_TEXTURE_TRANSFORM:r[u]=new jf;break;case Ie.KHR_MESH_QUANTIZATION:r[u]=new Yf;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Lf(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Ie={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Pf{constructor(e){this.parser=e,this.name=Ie.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ye(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Jo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gn(h),c.distance=u;break;case"spot":c=new ff(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,cn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Df{constructor(){this.name=Ie.KHR_MATERIALS_UNLIT}getMaterialType(){return xt}extendParams(e,t,n){const i=[];e.color=new ye(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,3001))}return Promise.all(i)}}class Rf{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class If{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(o,o)}return Promise.all(s)}}class Ff{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Nf{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,3001)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class zf{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Bf{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new ye(o[0],o[1],o[2]),Promise.all(s)}}class Uf{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Of{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new ye(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,3001)),Promise.all(s)}}class Gf{constructor(e){this.parser=e,this.name=Ie.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class kf{constructor(e){this.parser=e,this.name=Ie.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Vf{constructor(e){this.parser=e,this.name=Ie.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Hf{constructor(e){this.name=Ie.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Wf{constructor(e){this.name=Ie.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==At.TRIANGLES&&c.mode!==At.TRIANGLE_STRIP&&c.mode!==At.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const p=new Se,m=new w,_=new Nt,M=new w(1,1,1),y=new Nd(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,p.compose(m,_,M));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);qe.prototype.copy.call(y,g),y.frustumCulled=!1,this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Qo="glTF",li=12,_o={JSON:1313821514,BIN:5130562};class qf{constructor(e){this.name=Ie.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,li),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qo)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-li,s=new DataView(e,li);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===_o.JSON){const c=new Uint8Array(e,li+r,o);this.content=n.decode(c)}else if(l===_o.BIN){const c=li+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Xf{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ie.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const h in r){const u=Ws[h]||h.toLowerCase();o[u]=r[h]}for(const h in e.attributes){const u=Ws[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Vn[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const f in d.attributes){const g=d.attributes[f],p=l[f];p!==void 0&&(g.normalized=p)}u(d)},o,c)})})}}class jf{constructor(){this.name=Ie.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Yf{constructor(){this.name=Ie.KHR_MESH_QUANTIZATION}}class ea extends bi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,p=g-c,m=-2*f+3*d,_=f-d,M=1-m,y=_-d+u;for(let x=0;x!==o;x++){const T=r[p+x+o],C=r[p+x+l]*h,L=r[g+x+o],v=r[g+x]*h;s[x]=M*T+y*C+m*L+_*v}return s}}const $f=new Nt;class Kf extends ea{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return $f.fromArray(s).normalize().toArray(s),s}}const At={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xo={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},vo={33071:1001,33648:1002,10497:1e3},zs={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ws={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ln={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Jf={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},Bs={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zf(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),a.DefaultMaterial}function ci(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function cn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Qf(a,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function ep(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tp(a){const e=a.extensions&&a.extensions[Ie.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Mo(e.attributes):t=a.indices+":"+Mo(a.attributes)+":"+a.mode,t}function Mo(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function qs(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function np(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ip=new Se;class sp{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Lf,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Ko(this.options.manager):this.textureLoader=new yf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $o(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};ci(s,o,i),cn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,h]of r.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ie.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(ks.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=zs[i.type],o=Vn[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new We(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=zs[i.type],c=Vn[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,m;if(f&&f!==u){const _=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let y=t.cache.get(M);y||(p=new c(o,_*f,i.count*f/h),y=new Ld(p,f/h),t.cache.add(M,y)),m=new er(y,l,d%f/h,g)}else o===null?p=new c(i.count*l):p=new c(o,d,i.count*l),m=new We(p,l,g);if(i.sparse!==void 0){const _=zs.SCALAR,M=Vn[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,T=new M(r[1],y,i.sparse.count*_),C=new c(r[2],x,i.sparse.count*l);o!==null&&(m=new We(m.array.slice(),m.itemSize,m.normalized));for(let L=0,v=T.length;L<v;L++){const A=T[L];if(m.setX(A,C[L*l]),l>=2&&m.setY(A,C[L*l+1]),l>=3&&m.setZ(A,C[L*l+2]),l>=4&&m.setW(A,C[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"";const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=xo[d.magFilter]||1006,h.minFilter=xo[d.minFilter]||1008,h.wrapS=vo[d.wrapS]||1e3,h.wrapT=vo[d.wrapT]||1e3,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=o.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){const m=new rt(p);m.needsUpdate=!0,d(m)}),t.load(ks.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=r.mimeType||np(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ie.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ie.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[Ie.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new vi,Vt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new es,Vt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return ct}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[Ie.KHR_MATERIALS_UNLIT]){const u=i[Ie.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new ye(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,3001)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=2);const h=s.alphaMode||Bs.OPAQUE;if(h===Bs.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Bs.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==xt&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ie(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&r!==xt&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==xt&&(o.emissive=new ye().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==xt&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,3001)),Promise.all(c).then(function(){const u=new r(o);return s.name&&(u.name=s.name),cn(u,s),t.associations.set(u,{materials:e}),s.extensions&&ci(i,u,s),u})}createUniqueName(e){const t=Be.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ie.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return wo(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=tp(c),u=i[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[Ie.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=wo(new Je,c,t),i[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?Zf(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const p=h[f],m=r[f];let _;const M=c[f];if(m.mode===At.TRIANGLES||m.mode===At.TRIANGLE_STRIP||m.mode===At.TRIANGLE_FAN||m.mode===void 0)_=s.isSkinnedMesh===!0?new Dd(p,M):new Ae(p,M),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===At.TRIANGLE_STRIP?_.geometry=yo(_.geometry,1):m.mode===At.TRIANGLE_FAN&&(_.geometry=yo(_.geometry,2));else if(m.mode===At.LINES)_=new Vo(p,M);else if(m.mode===At.LINE_STRIP)_=new ts(p,M);else if(m.mode===At.LINE_LOOP)_=new zd(p,M);else if(m.mode===At.POINTS)_=new fi(p,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&ep(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),cn(_,s),m.extensions&&ci(i,_,m),t.assignFinalMaterial(_),u.push(_)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new It;t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new lt(Et.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Js(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),cn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],l=[];for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u){o.push(u);const d=new Se;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tr(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],d=n.samplers[u.sampler],f=u.target,g=f.node,p=n.parameters!==void 0?n.parameters[d.input]:d.input,m=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),r.push(this.getDependency("accessor",m)),o.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],f=c[3],g=c[4],p=[];for(let _=0,M=h.length;_<M;_++){const y=h[_],x=u[_],T=d[_],C=f[_],L=g[_];if(y===void 0)continue;y.updateMatrix();let v;switch(ln[L.path]){case ln.weights:v=wi;break;case ln.rotation:v=Sn;break;case ln.position:case ln.scale:default:v=Si;break}const A=y.name?y.name:y.uuid,D=C.interpolation!==void 0?Jf[C.interpolation]:2301,W=[];ln[L.path]===ln.weights?y.traverse(function(F){F.morphTargetInfluences&&W.push(F.name?F.name:F.uuid)}):W.push(A);let U=T.array;if(T.normalized){const F=qs(U.constructor),R=new Float32Array(U.length);for(let O=0,j=U.length;O<j;O++)R[O]=U[O]*F;U=R}for(let F=0,R=W.length;F<R;F++){const O=new v(W[F]+"."+ln[L.path],x.array,U,D);C.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(J){const q=this instanceof Sn?Kf:ea;return new q(this.times,this.values,this.getValueSize()/3,J)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(O)}}const m=n.name?n.name:"animation_"+e;return new rf(m,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)r.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ip)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new ko:c.length>1?h=new It:c.length===1?h=c[0]:h=new qe,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=r),cn(h,s),s.extensions&&ci(n,h,s),s.matrix!==void 0){const u=new Se;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new It;n.name&&(s.name=i.createUniqueName(n.name)),cn(s,n),n.extensions&&ci(t,s,n);const r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Vt||d instanceof rt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}}function rp(a,e,t){const n=e.attributes,i=new tn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),o.normalized){const h=qs(Vn[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new w,l=new w;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const p=qs(Vn[d.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new Yn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function wo(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=Ws[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return cn(a,e),rp(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Qf(a,e.targets,t):a})}class op{constructor(){this.textureLoader=new Ko,this.modelCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.loader=new Hs,this.models={}}loadTexture(e,t){if(this.textureCache.has(e)){const i=this.textureCache.get(e);return t&&t(i),i}const n=this.textureLoader.load(e,i=>{t&&t(i)});return this.textureCache.set(e,n),n}createMaterial(e){const t=JSON.stringify(e);if(this.materialCache.has(t))return this.materialCache.get(t);const n=new ct(e);return this.materialCache.set(t,n),n}createBunnyModel(){const e=new Ae(new dn(1,1,1),this.createMaterial({color:3368635})),t=new Ae(new Mi(.2,.5,4),this.createMaterial({color:16724787}));return t.position.set(0,0,.75),t.rotation.x=-Math.PI/2,e.add(t),e}createHumanModel(){console.log("AssetLoader: Starting human model creation");const e=new It;console.log("AssetLoader: Creating body");const t=new gi(.3,1.2,4,8),n=new ct({color:8421504,metalness:.5,roughness:.5}),i=new Ae(t,n);i.position.y=.6,e.add(i),console.log("AssetLoader: Body added to group"),console.log("AssetLoader: Creating head");const s=new en(.2,16,16),r=new ct({color:8421504,metalness:.5,roughness:.5}),o=new Ae(s,r);o.position.y=1.4,e.add(o),console.log("AssetLoader: Head added to group"),console.log("AssetLoader: Creating arms");const l=new gi(.1,.6,4,8),c=new ct({color:8421504,metalness:.5,roughness:.5}),h=new Ae(l,c);h.position.set(-.4,1.1,0),h.rotation.z=Math.PI/4,e.add(h);const u=new Ae(l,c);u.position.set(.4,1.1,0),u.rotation.z=-Math.PI/4,e.add(u),console.log("AssetLoader: Arms added to group"),console.log("AssetLoader: Creating legs");const d=new gi(.15,.8,4,8),f=new ct({color:8421504,metalness:.5,roughness:.5}),g=new Ae(d,f);g.position.set(-.2,.2,0),e.add(g);const p=new Ae(d,f);return p.position.set(.2,.2,0),e.add(p),console.log("AssetLoader: Legs added to group"),console.log("AssetLoader: Human model creation complete. Group children:",e.children.length),e}}class ap{constructor(e,t){this.game=e,this.container=t,this.instructions=null,this.keys={w:!1,a:!1,s:!1,d:!1},this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isMouseDown=!1,this.prevMouseX=0,this.prevMouseY=0,this.cameraAngle=Math.PI,this.cameraAngleY=.5,this.targetCameraAngle=this.cameraAngle,this.targetCameraAngleY=this.cameraAngleY,this.orbitSpeed=.005,this.isFirstPerson=this.game&&this.game.gameMode==="first_person",console.log("InputManager created - FP mode:",this.isFirstPerson),this.setupEventListeners()}setupEventListeners(){if(!this.container){console.error("InputManager: container is null, cannot setup event listeners");return}console.log("Setting up InputManager event listeners"),this.container.addEventListener("mousedown",e=>{this.handleMouseDown(e)}),document.addEventListener("mousemove",e=>{this.handleMouseMove(e)}),document.addEventListener("mouseup",e=>{this.handleMouseUp(e)}),window.addEventListener("keydown",e=>{e.code==="Space"&&e.preventDefault()}),document.addEventListener("keydown",e=>this.handleKey(e,!0)),document.addEventListener("keyup",e=>this.handleKey(e,!1)),document.addEventListener("pointerlockchange",()=>{console.log("Pointer lock state changed:",!!document.pointerLockElement)}),document.addEventListener("pointerlockerror",()=>{console.error("Pointer lock error")}),console.log("InputManager event listeners setup complete")}handleMouseDown(e){console.log("Mouse down in InputManager"),this.isFirstPerson&&this.container&&document.pointerLockElement!==this.container&&(console.log("Requesting pointer lock for first-person mode"),this.container.requestPointerLock()),this.game.player&&this.game.player.handleMouseDown(e),this.instructions&&(this.instructions.style.display="none",this.game.player&&(console.log("Initializing player controls from mouse down"),this.game.player.onInstructionsDismissed())),this.isMouseDown=!0,this.prevMouseX=e.clientX,this.prevMouseY=e.clientY}handleMouseUp(e){console.log("Mouse up in InputManager"),this.isMouseDown=!1,this.game.player&&this.game.player.handleMouseUp(e)}handleMouseMove(e){this.game.player&&this.game.player.handleMouseMove(e,{prevMouseX:this.prevMouseX,prevMouseY:this.prevMouseY,isMouseDown:this.isMouseDown}),this.instructions&&this.instructions.style.display==="none"&&(this.prevMouseX=e.clientX,this.prevMouseY=e.clientY)}handleKey(e,t){const n=e.code;if(n==="KeyW"?(this.keys.w=t,this.moveForward=t):n==="KeyA"?(this.keys.a=t,this.moveLeft=t):n==="KeyS"?(this.keys.s=t,this.moveBackward=t):n==="KeyD"&&(this.keys.d=t,this.moveRight=t),!!t)if(n==="KeyT"){if(console.log("%c 🔄 T KEY PRESSED: Switching player/mode","background: blue; color: white; padding: 3px;"),this.game.switchPlayerMode){const i=this.game.switchPlayerMode();console.log("%c Mode switched to: "+i,"color: blue;")}}else if(n==="Escape")this.showInstructions();else if(n==="KeyG")if(console.log("%c 🔮 G KEY PRESSED: Toggling God Mode","background: purple; color: white; padding: 3px;"),this.game.toggleGodMode){const i=this.game.toggleGodMode();console.log("%c God Mode is now: "+(i?"ON":"OFF"),"color: purple;")}else console.log("%c ❌ toggleGodMode function not found on game object","color: red");else n==="Digit1"?(console.log("%c 🐰 1 KEY PRESSED: Spawning Jackalope","background: green; color: white; padding: 3px;"),this.game.isGodMode?this.spawnPlayerForTeam("jackalope"):console.log("%c ❌ Cannot spawn Jackalope - God Mode is disabled","color: red")):n==="Digit2"?(console.log("%c 👤 2 KEY PRESSED: Spawning Merc","background: orange; color: white; padding: 3px;"),this.game.isGodMode?this.spawnPlayerForTeam("merc"):console.log("%c ❌ Cannot spawn Merc - God Mode is disabled","color: red")):n==="KeyP"&&(console.log("%c ℹ️ P KEY PRESSED: Showing Player Info","background: teal; color: white; padding: 3px;"),this.game.addPlayerInfoOverlay?this.game.addPlayerInfoOverlay():console.log("%c ❌ addPlayerInfoOverlay function not found on game object","color: red"))}spawnPlayerForTeam(e){if(console.log(`%c 🧪 ATTEMPTING TO SPAWN PLAYER FOR TEAM: ${e}`,"background: #4a2; color: white; padding: 3px;"),!this.game.isGodMode)return console.log("%c ❌ Cannot spawn player - God Mode is disabled","color: red"),null;if(!this.game.createNewPlayer)return console.log("%c ❌ createNewPlayer method not found on game object","color: red"),null;try{const t={x:(Math.random()-.5)*10,y:0,z:(Math.random()-.5)*10},n=this.game.players.filter(s=>s.team===e).length;console.log(`Creating ${e} player with ID: ${e}_${n+1}`);const i=this.game.createNewPlayer({team:e,id:`${e}_${n+1}`,isLocal:!1,isActive:!1});return i&&i.model?(i.model.position.x+=t.x,i.model.position.z+=t.z,i.position&&i.position.copy(i.model.position),console.log(`%c ✅ Spawned ${e} player at position:`,"color: green",i.model.position)):console.log("%c ❌ Failed to create player or player has no model","color: red"),this.game.addPlayerInfoOverlay&&this.game.addPlayerInfoOverlay(),console.log(`%c 🎮 Total players: ${this.game.players.length}`,"color: blue"),i}catch(t){return console.error("Error spawning player:",t),null}}addInstructions(e){console.log("Adding instructions overlay");const t=document.createElement("div");t.className="instructions",t.innerHTML=`
            <div class="instructions-content">
                <h2>Game Controls</h2>
                <p>Click to play</p>
                <h3>Basic Controls</h3>
                <p>W, A, S, D to move</p>
                <p>In third-person: Hold and drag mouse to orbit camera</p>
                <p>In first-person: Mouse to look around</p>
                <p>In first-person: Click to shoot flamethrower</p>
                <p>Press T to toggle between modes</p>
                <p>Press ESC to exit game mode</p>
                
                <h3>Multiplayer Controls</h3>
                <p>G - Toggle God Mode (admin controls)</p>
                <p>1 - Spawn a Jackalope (in God Mode)</p>
                <p>2 - Spawn a Merc (in God Mode)</p>
                <p>P - Show player info overlay</p>
            </div>
        `,t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center",t.style.color="white",t.style.backgroundColor="rgba(0, 0, 0, 0.7)",t.style.fontFamily="Arial, sans-serif",t.style.zIndex="100",t.style.cursor="pointer",t.style.textAlign="center",this.instructions=t,e.appendChild(t),t.addEventListener("click",()=>{console.log("Instructions clicked, hiding and initializing player"),this.hideInstructions(),this.game.player&&this.game.player.onInstructionsDismissed()})}showInstructions(){this.instructions&&(this.instructions.style.display="flex")}hideInstructions(){this.instructions&&(this.instructions.style.display="none",this.prevMouseX=0,this.prevMouseY=0)}getKeysState(){return{...this.keys,moveForward:this.moveForward,moveBackward:this.moveBackward,moveLeft:this.moveLeft,moveRight:this.moveRight}}getCameraOrbitState(){return{cameraAngle:this.cameraAngle,cameraAngleY:this.cameraAngleY,targetCameraAngle:this.targetCameraAngle,targetCameraAngleY:this.targetCameraAngleY}}updateCameraOrbit(e){this.cameraAngle=e.cameraAngle??this.cameraAngle,this.cameraAngleY=e.cameraAngleY??this.cameraAngleY,this.targetCameraAngle=e.targetCameraAngle??this.targetCameraAngle,this.targetCameraAngleY=e.targetCameraAngleY??this.targetCameraAngleY}}class ta{constructor(e,t={}){this.game=e,this.scene=e.scene,this.camera=e.camera,this.model=null,this.position=new w(0,0,0),this.direction=new w(0,0,-1),this.targetDirection=new w(0,0,-1),this.physics=null,this.movement=null,this.controls=null,this.velocity=new w(0,0,0),this.isGrounded=!0,this.eyeHeight=t.eyeHeight||1.6,this.id=t.id||`player_${Math.floor(Math.random()*1e4)}`,this.team=t.team||"unknown",this.isLocal=t.isLocal!==void 0?t.isLocal:!0,this.networkState={position:new w,rotation:new bn,velocity:new w,timestamp:0,actions:{}},console.log(`Player ${this.id} initialized (team: ${this.team}, local: ${this.isLocal})`)}init(){console.warn("Player.init() should be implemented by child classes")}update(e,t=!0){if(t&&this.isLocal){const n=this.controls?this.controls.getInput():null;this.movement&&n&&this.movement.update(n,e,this)}else this.isLocal||this.interpolateFromNetworkState(e);this.physics&&this.physics.apply(this,e),this.isLocal&&this.game.isMultiplayerEnabled&&this.sendNetworkUpdate()}setNetworkState(e){e&&(e.position&&this.networkState.position.set(e.position.x,e.position.y,e.position.z),e.rotation&&this.networkState.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),e.velocity&&this.networkState.velocity.set(e.velocity.x,e.velocity.y,e.velocity.z),this.networkState.timestamp=e.timestamp||Date.now(),this.networkState.actions=e.actions||{},e.actions&&this.processNetworkActions(e.actions))}processNetworkActions(e){e.fire&&this.team==="merc"&&(e.fire==="start"&&this.weapon?this.weapon.startFire():e.fire==="stop"&&this.weapon&&this.weapon.stopFire())}interpolateFromNetworkState(e){if(this.model&&this.networkState.position.lengthSq()>0){const t=Math.min(e*10,1);if(this.model.position.lerp(this.networkState.position,t),this.position.copy(this.model.position),this.networkState.rotation){const n=new Nt().setFromEuler(this.networkState.rotation);this.model.quaternion.slerp(n,t)}}}sendNetworkUpdate(){if(!this.game.networking||!this.model)return;const e={id:this.id,team:this.team,position:{x:this.model.position.x,y:this.model.position.y,z:this.model.position.z},rotation:{x:this.model.rotation.x,y:this.model.rotation.y,z:this.model.rotation.z},velocity:{x:this.velocity.x,y:this.velocity.y,z:this.velocity.z},timestamp:Date.now(),actions:this.getActionState()};this.game.networking.updatePlayerState&&this.game.networking.updatePlayerState(e)}getActionState(){return{}}handleMouseDown(e){this.isLocal&&this.controls&&this.controls.handleMouseDown(e)}handleMouseMove(e,t){if(this.isLocal&&this.controls)if(document.pointerLockElement===this.game.container){const n={movementX:e.movementX||0,movementY:e.movementY||0,isPointerLocked:!0};this.controls.handleMouseMove(e,n)}else this.controls.handleMouseMove(e,t)}onInstructionsDismissed(){if(console.log("Instructions dismissed, initializing controls"),this.isLocal&&this.controls&&typeof this.controls.init=="function")try{if(!this.game||!this.game.container){console.error("Cannot initialize controls: game.container is null or undefined");return}this.controls.init(this.game.container),console.log("Controls initialized successfully")}catch(e){console.error("Error initializing player controls:",e)}else console.warn("No controls to initialize or init method not available")}movePlayer(e){this.model&&(this.model.position.add(e),this.position.copy(this.model.position))}rotateToDirection(e,t){if(this.movement)this.movement.rotate(this,e,t);else if(this.model){const n=new Nt,i=new Se,s=e.clone().negate(),r=new w(0,1,0);i.lookAt(new w(0,0,0),s,r),n.setFromRotationMatrix(i);const o=this.movement?this.movement.rotationSpeed:5,l=Math.min(1,o*t);this.model.quaternion.slerp(n,l),this.direction.lerp(e,l).normalize()}}cleanup(){console.log(`Cleaning up player ${this.id}`),this.controls&&typeof this.controls.cleanup=="function"&&this.controls.cleanup(),this.model&&(this.scene.remove(this.model),this.model=null)}setPhysics(e){this.physics=e}setMovement(e){this.movement=e}setControls(e){if(!e){console.warn("Attempting to set null controls component");return}this.controls=e,console.log("Controls component set");const t=["getInput","init","cleanup"];for(const n of t)typeof this.controls[n]!="function"&&console.warn(`Controls component missing required method: ${n}`)}handleMouseUp(e){this.isLocal&&this.controls&&typeof this.controls.handleMouseUp=="function"&&this.controls.handleMouseUp(e)}}class na{constructor(e={}){this.gravity=e.gravity||9.8,this.frictionCoefficient=e.frictionCoefficient||.1,this.airResistance=e.airResistance||.01,this.maxVelocity=e.maxVelocity||10}apply(e,t){console.warn("BasePhysics.apply() should be implemented by subclasses")}applyGravity(e,t){e.velocity&&(e.velocity.y-=this.gravity*t)}applyFriction(e,t){if(!e.velocity||!e.isGrounded)return;const n=e.velocity.clone().setY(0).normalize().multiplyScalar(-this.frictionCoefficient);e.velocity.add(n)}limitVelocity(e){e.velocity&&e.velocity.length()>this.maxVelocity&&e.velocity.normalize().multiplyScalar(this.maxVelocity)}}class lp extends na{constructor(e={}){super({gravity:25,frictionCoefficient:.05,airResistance:.03,maxVelocity:12,...e}),this.bounceCoefficient=e.bounceCoefficient||.2,this.floatiness=e.floatiness||1.2,this.groundLevel=.5,this.raycaster=new Zo,this.downDirection=new w(0,-1,0),this.terrainObjects=[],this.scene=null}setScene(e){this.scene=e,this.scene&&this.findTerrainObjects()}findTerrainObjects(){this.terrainObjects=[],this.scene.traverse(e=>{e.isMesh&&e.userData&&e.userData.isTerrainCollider&&this.terrainObjects.push(e)}),console.log(`Found ${this.terrainObjects.length} terrain colliders for bunny physics`)}getTerrainHeight(e){if(this.terrainObjects.length===0)return 0;const t=new w(e.x,20,e.z);this.raycaster.set(t,this.downDirection);const n=this.raycaster.intersectObjects(this.terrainObjects);return n.length>0?n[0].point.y:0}apply(e,t,n={}){var h,u;e.velocity||(e.velocity=new w(0,0,0),e.isGrounded=!0);const s=this.getTerrainHeight(((h=e.model)==null?void 0:h.position)||e.position)+this.groundLevel;if(e.model&&e.model.position.y<s&&(e.model.position.y=s,e.position.copy(e.model.position),e.isGrounded=!0,e.velocity.y=0),(n.actions&&n.actions.jump||n.jump)&&e.isGrounded&&(e.velocity.y=4,e.isGrounded=!1,console.log("Bunny hop!")),!e.isGrounded){const d=this.gravity*this.floatiness;e.velocity.y-=d*t}if(!e.isGrounded){const d=e.velocity.clone().multiplyScalar(-this.airResistance*t);e.velocity.add(d)}e.isGrounded&&(this.applyFriction(e,t),e.velocity.y=0),this.limitVelocity(e);const o=new w(0,e.velocity.y*t,0);e.movePlayer(o);const c=this.getTerrainHeight(((u=e.model)==null?void 0:u.position)||e.position)+this.groundLevel;e.model&&e.model.position.y<c?(e.model.position.y=c,e.position.copy(e.model.position),e.velocity.y<-1?e.velocity.y=-e.velocity.y*this.bounceCoefficient:(e.velocity.y=0,e.isGrounded=!0)):e.model&&e.model.position.y>c+.1&&(e.isGrounded=!1)}}class ia{constructor(e={}){this.movementSpeed=e.movementSpeed||5,this.rotationSpeed=e.rotationSpeed||5,this.jumpForce=e.jumpForce||5,this.acceleration=e.acceleration||10,this.deceleration=e.deceleration||5}update(e,t,n){console.warn("BaseMovement.update() should be implemented by subclasses")}move(e,t){e.model&&(e.model.position.add(t),e.position.copy(e.model.position))}rotate(e,t,n){if(!e.model)return;const i=new Nt,s=new Se,r=t.clone().negate(),o=new w(0,1,0);s.lookAt(new w(0,0,0),r,o),i.setFromRotationMatrix(s);const l=Math.min(1,this.rotationSpeed*n);e.model.quaternion.slerp(i,l),e.direction.lerp(t,l).normalize()}jump(e){e.isGrounded&&e.velocity&&(e.velocity.y=this.jumpForce,e.isGrounded=!1)}}class cp extends ia{constructor(e={}){super({movementSpeed:7,rotationSpeed:4,jumpForce:7,acceleration:12,deceleration:4,...e}),this.lastDirection=new w,this.moveBuffer=new w,this.sprintMultiplier=2,this.isSprinting=!1,this.hopTime=0,this.hopFrequency=3,this.hopAmplitude=.15,this.visualOffset=new w(0,0,0)}update(e,t,n){const i=e.moveDirection,s=e.actions;this.isSprinting=s.sprint||!1;const r=e.cameraOrbit.cameraAngle||0,o=new w(0,0,-1);o.applyAxisAngle(new w(0,1,0),r),o.y=0,o.normalize();const l=new w(1,0,0);l.applyAxisAngle(new w(0,1,0),r),l.y=0,l.normalize();const c=new w;let h=!1;const u=this.isSprinting?this.movementSpeed*this.sprintMultiplier:this.movementSpeed;if(i.z<0&&(c.add(o.clone().multiplyScalar(u*t)),h=!0),i.z>0&&(c.add(o.clone().multiplyScalar(-u*t)),h=!0),i.x<0&&(c.add(l.clone().multiplyScalar(-u*t)),h=!0),i.x>0&&(c.add(l.clone().multiplyScalar(u*t)),h=!0),h){const d=new w(c.x,0,c.z);if(this.moveBuffer.x=Et.lerp(this.moveBuffer.x,d.x,this.acceleration*t),this.moveBuffer.z=Et.lerp(this.moveBuffer.z,d.z,this.acceleration*t),this.isSprinting&&n.isGrounded){this.hopTime+=t*this.hopFrequency;const g=(Math.sin(this.hopTime)+1)*.5,m=g*g*(3-2*g)*this.hopAmplitude;this.visualOffset.y=Et.lerp(this.visualOffset.y,m,Math.min(1,6*t)),n.model&&(n.model.position.y=Math.max(.5,n.position.y)+this.visualOffset.y)}else this.visualOffset.y>.001?(this.visualOffset.y*=1-Math.min(1,10*t),n.model&&(n.model.position.y=Math.max(.5,n.position.y)+this.visualOffset.y)):n.model&&(n.model.position.y=Math.max(.5,n.position.y));const f=new w(this.moveBuffer.x,0,this.moveBuffer.z);this.move(n,f),this.lastDirection.copy(d).normalize(),this.lastDirection.lengthSq()>.01&&this.rotate(n,this.lastDirection,t)}else{if(this.moveBuffer.x*=1-this.deceleration*t,this.moveBuffer.z*=1-this.deceleration*t,this.moveBuffer.length()>.01){const d=new w(this.moveBuffer.x,0,this.moveBuffer.z);this.move(n,d)}this.visualOffset.y>.001?(this.visualOffset.y*=1-Math.min(1,10*t),n.model&&(n.model.position.y=Math.max(.5,n.position.y)+this.visualOffset.y)):n.model&&(n.model.position.y=Math.max(.5,n.position.y))}s.jump&&n.isGrounded&&this.jump(n)}}class sa{constructor(e={}){this.sensitivity=e.sensitivity||.002,this.invertY=e.invertY||!1,this.lockPointer=e.lockPointer||!1,this.enableGamepad=e.enableGamepad||!0,this.keys={},this.mouseState={buttons:{},position:new ie,movement:new ie},this.gamepadState=null,this.cameraOrbit={cameraAngle:0,targetCameraAngle:0,cameraAngleY:0,targetCameraAngleY:0},this.onCameraZoom=null}init(e){console.warn("BaseControls.init() should be implemented by subclasses")}getInput(){return console.warn("BaseControls.getInput() should be implemented by subclasses"),{moveDirection:new w,lookDirection:new ie,actions:{},cameraOrbit:{...this.cameraOrbit}}}handleKeyDown(e){this.keys[e.key.toLowerCase()]=!0}handleKeyUp(e){this.keys[e.key.toLowerCase()]=!1}handleMouseDown(e){this.mouseState.buttons[e.button]=!0}handleMouseUp(e){this.mouseState.buttons[e.button]=!1}handleMouseMove(e){this.mouseState.position.set(e.clientX,e.clientY),e.movementX!==void 0&&e.movementY!==void 0&&this.mouseState.movement.set(e.movementX,e.movementY)}updateCameraOrbit(e){Object.assign(this.cameraOrbit,e)}cleanup(){console.warn("BaseControls.cleanup() should be implemented by subclasses")}setCameraZoomCallback(e){this.onCameraZoom=e}}class hp extends sa{constructor(e={}){super({sensitivity:.0025,invertY:!1,lockPointer:!0,enableGamepad:!0,...e}),this.orbitSmoothingFactor=e.orbitSmoothingFactor||.1,this.maxVerticalAngle=e.maxVerticalAngle||Math.PI/3,this.container=null,this.isPointerLocked=!1,this.boundKeyDown=this.handleKeyDown.bind(this),this.boundKeyUp=this.handleKeyUp.bind(this),this.boundMouseDown=this.handleMouseDown.bind(this),this.boundMouseUp=this.handleMouseUp.bind(this),this.boundMouseMove=this.handleMouseMove.bind(this),this.boundPointerLockChange=this.handlePointerLockChange.bind(this),this.boundWheel=this.handleWheel.bind(this)}init(e){if(!e){console.error("BunnyControls.init: Container is null or undefined");return}this.container=e,window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp),e.addEventListener("mousedown",this.boundMouseDown),window.addEventListener("mouseup",this.boundMouseUp),window.addEventListener("mousemove",this.boundMouseMove),window.addEventListener("wheel",this.boundWheel),document.addEventListener("pointerlockchange",this.boundPointerLockChange),this.lockPointer&&e.addEventListener("click",()=>{document.pointerLockElement!==e&&e.requestPointerLock()}),console.log("BunnyControls initialized with container:",e.id)}handlePointerLockChange(){this.isPointerLocked=document.pointerLockElement===this.container,console.log("Pointer lock changed:",this.isPointerLocked)}handleWheel(e){const t=Math.sign(e.deltaY);typeof this.onCameraZoom=="function"&&this.onCameraZoom(t)}handleMouseMove(e){if(super.handleMouseMove(e),this.isPointerLocked){const t=e.movementX*this.sensitivity,n=e.movementY*this.sensitivity*(this.invertY?-1:1);this.cameraOrbit.targetCameraAngle-=t,this.cameraOrbit.targetCameraAngleY+=n,this.cameraOrbit.targetCameraAngleY=Math.max(-this.maxVerticalAngle,Math.min(this.maxVerticalAngle,this.cameraOrbit.targetCameraAngleY)),this.cameraOrbit.cameraAngle=Et.lerp(this.cameraOrbit.cameraAngle,this.cameraOrbit.targetCameraAngle,this.orbitSmoothingFactor),this.cameraOrbit.cameraAngleY=Et.lerp(this.cameraOrbit.cameraAngleY,this.cameraOrbit.targetCameraAngleY,this.orbitSmoothingFactor)}}getInput(){const e=new w(0,0,0);(this.keys.w||this.keys.arrowup)&&(e.z=-1),(this.keys.s||this.keys.arrowdown)&&(e.z=1),(this.keys.a||this.keys.arrowleft)&&(e.x=-1),(this.keys.d||this.keys.arrowright)&&(e.x=1),e.length()>1&&e.normalize();const t={jump:this.keys[" "]||!1,sprint:this.keys.shift||!1,interact:this.keys.e||this.mouseState.buttons[0]||!1};return{moveDirection:e,lookDirection:new ie(this.mouseState.movement.x,this.mouseState.movement.y),actions:t,cameraOrbit:{...this.cameraOrbit}}}cleanup(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),window.removeEventListener("mousedown",this.boundMouseDown),window.removeEventListener("mouseup",this.boundMouseUp),window.removeEventListener("mousemove",this.boundMouseMove),document.removeEventListener("pointerlockchange",this.boundPointerLockChange)}setCameraZoomCallback(e){this.onCameraZoom=e}}class up extends ta{constructor(e,t={}){super(e,{eyeHeight:.8,...t}),this.thirdPersonDistance=t.thirdPersonDistance||5,this.thirdPersonHeight=t.thirdPersonHeight||2,this.cameraTarget=new w,this.setPhysics(new lp(t.physics||{})),this.setMovement(new cp(t.movement||{})),this.setControls(new hp(t.controls||{})),this.controls&&typeof this.controls.setCameraZoomCallback=="function"?this.controls.setCameraZoomCallback(this.adjustCameraDistance.bind(this)):console.warn("BunnyPlayer: controls.setCameraZoomCallback is not available"),this.init()}init(){this.model=this.game.assetLoader.createBunnyModel(),this.model.position.set(0,.5,0),this.model.traverse(e=>{e instanceof Ae&&(e.castShadow=!0,e.receiveShadow=!0,e.material&&(e.material.name&&e.material.name.includes("Body")?(e.material=e.material.clone(),e.material.color.set(15790320)):e.material.name&&e.material.name.includes("Fur")?(e.material=e.material.clone(),e.material.color.set(16777215)):(!e.material.name||!e.material.name.includes("Eye")&&!e.material.name.includes("Nose"))&&(e.material=e.material.clone(),e.material.color.set(15263976))))}),this.scene.add(this.model),this.position.copy(this.model.position),this.updateCameraPosition()}update(e){super.update(e),this.updateCameraPosition()}adjustCameraDistance(e){this.thirdPersonDistance+=e*.5,this.thirdPersonDistance=Math.max(2,Math.min(10,this.thirdPersonDistance))}updateCameraPosition(){if(!this.model)return;const e=this.controls?this.controls.cameraOrbit:{cameraAngle:0,cameraAngleY:0},t=new w(Math.sin(e.cameraAngle)*this.thirdPersonDistance,this.thirdPersonHeight+Math.sin(e.cameraAngleY)*this.thirdPersonDistance,Math.cos(e.cameraAngle)*this.thirdPersonDistance);this.camera.position.copy(this.model.position).add(t),this.cameraTarget.copy(this.model.position).add(new w(0,this.eyeHeight,0)),this.camera.lookAt(this.cameraTarget)}onInstructionsDismissed(){super.onInstructionsDismissed()}getActionState(){const e={};return this.controls&&this.controls.cameraOrbit&&(e.cameraOrbit={angle:this.controls.cameraOrbit.cameraAngle,angleY:this.controls.cameraOrbit.cameraAngleY}),this.physics&&(e.isJumping=!this.physics.isGrounded),e}processNetworkActions(e){super.processNetworkActions(e),e.cameraOrbit&&this.controls&&this.controls.cameraOrbit&&(e.cameraOrbit.angle!==void 0&&(this.controls.cameraOrbit.targetCameraAngle=e.cameraOrbit.angle),e.cameraOrbit.angleY!==void 0&&(this.controls.cameraOrbit.targetCameraAngleY=e.cameraOrbit.angleY))}}class dp extends na{constructor(e={}){super({gravity:9.8,frictionCoefficient:.2,airResistance:.01,maxVelocity:8,...e}),this.groundedThreshold=e.groundedThreshold||.1,this.mass=e.mass||70,this.inertiaFactor=e.inertiaFactor||.85,this.groundLevel=1,this.raycaster=new Zo,this.downDirection=new w(0,-1,0),this.terrainObjects=[],this.scene=null}setScene(e){this.scene=e,this.scene&&this.findTerrainObjects()}findTerrainObjects(){this.terrainObjects=[],this.scene.traverse(e=>{e.isMesh&&e.userData&&e.userData.isTerrainCollider&&this.terrainObjects.push(e)}),console.log(`Found ${this.terrainObjects.length} terrain colliders for human physics`)}getTerrainHeight(e){if(this.terrainObjects.length===0)return 0;const t=new w(e.x,20,e.z);this.raycaster.set(t,this.downDirection);const n=this.raycaster.intersectObjects(this.terrainObjects);return n.length>0?n[0].point.y:0}apply(e,t){if(e.velocity||(e.velocity=new w(0,0,0),e.isGrounded=!0),!e.model)return;const i=this.getTerrainHeight(e.model.position)+this.groundLevel;if(e.model.position.y<i&&(e.model.position.y=i,e.position.copy(e.model.position),e.isGrounded=!0,e.velocity.y=0),e.isGrounded||(e.velocity.y-=this.gravity*t),!e.isGrounded){const l=e.velocity.clone().multiplyScalar(-this.airResistance*t);e.velocity.add(l)}if(e.isGrounded&&(this.applyFriction(e,t),e.velocity.y=0),e.previousVelocity){const l=new ie(e.velocity.x,e.velocity.z),c=new ie(e.previousVelocity.x,e.previousVelocity.z);l.lerp(c,this.inertiaFactor*t),e.velocity.x=l.x,e.velocity.z=l.y}e.previousVelocity||(e.previousVelocity=new w),e.previousVelocity.copy(e.velocity),this.limitVelocity(e);const s=new w(0,e.velocity.y*t,0);e.movePlayer(s);const o=this.getTerrainHeight(e.model.position)+this.groundLevel;e.model.position.y<o?(e.model.position.y=o,e.velocity.y=0,e.isGrounded=!0,e.position.copy(e.model.position)):e.model.position.y>o+this.groundedThreshold&&(e.isGrounded=!1)}resolveEnvironmentCollisions(e){}}class fp extends ia{constructor(e={}){super({movementSpeed:5,rotationSpeed:5.5,jumpForce:5,acceleration:8,deceleration:6,...e}),this.sprintMultiplier=e.sprintMultiplier||1.8,this.crouchMultiplier=e.crouchMultiplier||.5,this.isCrouching=!1,this.isSprinting=!1,this.headBobAmount=e.headBobAmount||.05,this.headBobSpeed=e.headBobSpeed||5,this.headBobTime=0,this.footstepDistance=0,this.footstepThreshold=e.footstepThreshold||2,this.moveBuffer=new w}update(e,t,n){const i=e.moveDirection,s=e.actions,r=e.firstPersonMode;s.crouch!==this.isCrouching&&(this.isCrouching=s.crouch),this.isSprinting=s.sprint&&!this.isCrouching&&i.z<0;let o=this.movementSpeed;this.isSprinting&&(o*=this.sprintMultiplier),this.isCrouching&&(o*=this.crouchMultiplier);const l=new w;let c=!1;if(r){if(i.z!==0||i.x!==0){c=!0;const h=new w;if(n.fpCamera){const u=new Se;u.extractRotation(n.fpCamera.matrixWorld),h.set(0,0,-1).applyMatrix4(u),h.y=0,h.normalize();const d=new w;d.crossVectors(new w(0,1,0),h).normalize(),i.z!==0&&l.add(h.clone().multiplyScalar(-i.z*o*t)),i.x!==0&&l.add(d.clone().multiplyScalar(-i.x*o*t))}}}else if(i.z!==0||i.x!==0){c=!0;const h=e.cameraOrbit?e.cameraOrbit.cameraAngle:0,u=new w(0,0,-1);u.applyAxisAngle(new w(0,1,0),h),u.y=0,u.normalize();const d=new w(1,0,0);d.applyAxisAngle(new w(0,1,0),h),d.y=0,d.normalize(),i.z!==0&&l.add(u.clone().multiplyScalar(i.z*o*t)),i.x!==0&&l.add(d.clone().multiplyScalar(i.x*o*t))}if(c){const h=new w(l.x,0,l.z);this.moveBuffer.x=Et.lerp(this.moveBuffer.x,h.x,this.acceleration*t),this.moveBuffer.z=Et.lerp(this.moveBuffer.z,h.z,this.acceleration*t);const u=new w(this.moveBuffer.x,0,this.moveBuffer.z);if(this.move(n,u),n.isGrounded){this.headBobTime+=t*this.headBobSpeed*(this.isSprinting?1.5:1)*(this.isCrouching?.7:1);const d=Math.sin(this.headBobTime)*this.headBobAmount;r&&n.fpCamera&&n.model&&(n.fpCamera.position.y=n.eyeHeight+d),this.footstepDistance+=h.length(),this.footstepDistance>=this.footstepThreshold&&(this.playFootstepSound(n),this.footstepDistance=0)}if(!r){const d=h.clone().normalize();d.lengthSq()>.01&&this.rotate(n,d,t)}}else if(this.moveBuffer.x*=1-this.deceleration*t,this.moveBuffer.z*=1-this.deceleration*t,this.moveBuffer.length()>.01){const h=new w(this.moveBuffer.x,0,this.moveBuffer.z);this.move(n,h)}s.jump&&n.isGrounded&&this.jump(n)}playFootstepSound(e){this.isSprinting,this.isCrouching}}class pp extends sa{constructor(e={}){super({sensitivity:.002,invertY:e.invertY||!1,lockPointer:!0,enableGamepad:!0,...e}),this.firstPersonMode=e.firstPersonMode||!1,this.canToggleView=e.canToggleView!==void 0?e.canToggleView:!0,this.mouseSmoothingFactor=e.mouseSmoothingFactor||.2,this.container=null,this.isPointerLocked=!1,this.fpLookDirection=new ie(0,0),this.targetFpLookDirection=new ie(0,0),this.viewToggleRequested=!1,this.boundKeyDown=this.handleKeyDown.bind(this),this.boundKeyUp=this.handleKeyUp.bind(this),this.boundMouseDown=this.handleMouseDown.bind(this),this.boundMouseUp=this.handleMouseUp.bind(this),this.boundMouseMove=this.handleMouseMove.bind(this),this.boundPointerLockChange=this.handlePointerLockChange.bind(this),this.boundWheel=this.handleWheel.bind(this),console.log("HumanControls constructed, firstPersonMode:",this.firstPersonMode)}init(e){if(!e){console.error("HumanControls.init: Container is null or undefined");return}this.container=e,console.log("HumanControls initializing with container:",e.id),window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp),e.addEventListener("mousedown",this.boundMouseDown),window.addEventListener("mouseup",this.boundMouseUp),window.addEventListener("mousemove",this.boundMouseMove),window.addEventListener("wheel",this.boundWheel),document.addEventListener("pointerlockchange",this.boundPointerLockChange),this.lockPointer&&e.addEventListener("click",()=>{if(console.log("Container clicked, requesting pointer lock"),document.pointerLockElement!==e)try{e.requestPointerLock()}catch(t){console.error("Error requesting pointer lock:",t)}})}handlePointerLockChange(){this.isPointerLocked=document.pointerLockElement===this.container,console.log("Pointer lock changed:",this.isPointerLocked,"container:",this.container?this.container.id:"null")}handleWheel(e){if(this.firstPersonMode)return;const t=Math.sign(e.deltaY);typeof this.onCameraZoom=="function"&&this.onCameraZoom(t)}handleMouseDown(e){if(super.handleMouseDown(e),this.firstPersonMode&&this.container&&document.pointerLockElement!==this.container)try{this.container.requestPointerLock()}catch(t){console.error("Error requesting pointer lock:",t)}}handleKeyDown(e){super.handleKeyDown(e),e.key.toLowerCase()==="v"&&this.canToggleView&&(this.viewToggleRequested=!0,console.log("View toggle requested via V key"))}handleMouseMove(e,t){super.handleMouseMove(e,t);let n=0,i=0;if(t&&t.isPointerLocked)n=t.movementX*this.sensitivity,i=t.movementY*this.sensitivity*(this.invertY?-1:1),this.isPointerLocked=!0;else if(this.isPointerLocked&&e.movementX!==void 0)n=e.movementX*this.sensitivity,i=e.movementY*this.sensitivity*(this.invertY?-1:1);else return!this.isPointerLocked&&t,void 0;this.firstPersonMode?(this.targetFpLookDirection.x-=n,this.targetFpLookDirection.y=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,this.targetFpLookDirection.y-i)),this.fpLookDirection.x=Et.lerp(this.fpLookDirection.x,this.targetFpLookDirection.x,this.mouseSmoothingFactor),this.fpLookDirection.y=Et.lerp(this.fpLookDirection.y,this.targetFpLookDirection.y,this.mouseSmoothingFactor)):(this.cameraOrbit.targetCameraAngle-=n,this.cameraOrbit.targetCameraAngleY-=i,this.cameraOrbit.targetCameraAngleY=Math.max(-Math.PI/3,Math.min(Math.PI/3,this.cameraOrbit.targetCameraAngleY)),this.cameraOrbit.cameraAngle=Et.lerp(this.cameraOrbit.cameraAngle,this.cameraOrbit.targetCameraAngle,this.mouseSmoothingFactor),this.cameraOrbit.cameraAngleY=Et.lerp(this.cameraOrbit.cameraAngleY,this.cameraOrbit.targetCameraAngleY,this.mouseSmoothingFactor))}getInput(){const e=new w(0,0,0);(this.keys.w||this.keys.arrowup)&&(e.z=-1),(this.keys.s||this.keys.arrowdown)&&(e.z=1),(this.keys.a||this.keys.arrowleft)&&(e.x=-1),(this.keys.d||this.keys.arrowright)&&(e.x=1),e.length()>1&&e.normalize();const t={jump:this.keys[" "]||!1,sprint:this.keys.shift||!1,interact:this.keys.e||this.mouseState.buttons[0]||!1,crouch:this.keys.control||!1,reload:this.keys.r||!1,toggleView:this.viewToggleRequested,use:this.mouseState.buttons[2]||!1};return this.viewToggleRequested,this.viewToggleRequested&&(this.viewToggleRequested=!1,console.log("View toggle requested from controls, letting player handle it")),{moveDirection:e,lookDirection:this.firstPersonMode?this.fpLookDirection.clone():new ie(this.mouseState.movement.x,this.mouseState.movement.y),actions:t,cameraOrbit:{...this.cameraOrbit},firstPersonMode:this.firstPersonMode}}cleanup(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),window.removeEventListener("mousedown",this.boundMouseDown),window.removeEventListener("mouseup",this.boundMouseUp),window.removeEventListener("mousemove",this.boundMouseMove),window.removeEventListener("wheel",this.boundWheel),document.removeEventListener("pointerlockchange",this.boundPointerLockChange),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock()}setCameraZoomCallback(e){this.onCameraZoom=e}updateViewMode(e){this.firstPersonMode!==e&&(console.log("Controls: updating view mode to:",e?"first-person":"third-person"),this.firstPersonMode=e)}}class mp{constructor(e,t={}){this.player=e,this.scene=e.scene,this.game=e.game,this.name=t.name||"Unknown Weapon",this.damage=t.damage||10,this.cooldown=t.cooldown||.1,this.range=t.range||20,this.lastFireTime=0,this.isFiring=!1,this.isReloading=!1,this.model=null,this.effects=[],this.init(t)}init(e){console.log(`Initializing weapon: ${this.name}`)}startFire(){this.isFiring=!0}stopFire(){this.isFiring=!1}fire(){const e=performance.now()/1e3;return e-this.lastFireTime<this.cooldown?!1:(this.lastFireTime=e,console.log(`[DEBUG] ${this.name} fired! Scene has ${this.scene?"valid scene":"no scene"}`),this.scene&&console.log(`[DEBUG] Scene children: ${this.scene.children.length}, Effects: ${this.effects.length}`),!0)}update(e){this.isFiring&&this.fire(),this.updateEffects(e)}updateEffects(e){}attachToPlayer(){this.model&&this.player.model&&this.player.model.add(this.model)}detachFromPlayer(){this.model&&this.model.parent&&this.model.parent.remove(this.model)}cleanup(){this.stopFire(),this.detachFromPlayer(),this.effects.forEach(e=>{e.parent&&e.parent.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.effects=[]}}function Xs(a){var i,s;const e=((i=window.jackalopePlanetSettings)==null?void 0:i.pluginUrl)||"/wp-content/plugins/jackalope-planet",t=a.startsWith("/")?a.substring(1):a;console.log("[ASSET] Settings object available:",window.jackalopePlanetSettings?"YES":"NO"),console.log("[ASSET] Plugin URL from settings:",((s=window.jackalopePlanetSettings)==null?void 0:s.pluginUrl)||"FALLBACK URL USED"),console.log("[ASSET] Original relativePath:",a),console.log("[ASSET] Cleaned path:",t);const n=`${e}/${t}`;return console.log("[ASSET] Final resolved path:",n),n}function gp(a){var t,n;if((t=window.jackalopePlanetSettings)!=null&&t.modelPaths&&window.jackalopePlanetSettings.modelPaths[a]){const i=window.jackalopePlanetSettings.modelPaths[a];return console.log(`[ASSET] Using explicit model path for "${a}":`,i),i}if((n=window.jackalopePlanetSettings)!=null&&n.assetsUrl){const i=`${window.jackalopePlanetSettings.assetsUrl}models/weapons/${a}.glb`;return console.log(`[ASSET] Using assets URL for "${a}":`,i),i}const e=Xs(`assets/models/weapons/${a}.glb`);return console.log(`[ASSET] Using fallback path for "${a}":`,e),e}let Hn=null;window.debugFlamethrower=function(){if(!Hn){console.log("[DEBUG] No flamethrower instance found yet");return}const a=Hn;return console.log("-------- FLAMETHROWER DEBUG --------"),console.log("Is initialized:",a?"yes":"no"),console.log("Is firing:",a.isFiring),console.log("Has particle system:",a.particleSystem?"yes":"no"),console.log("Particle count:",a.particles.length),console.log("Active particles:",a.particles.filter(e=>e.life>0).length),console.log("Scene:",a.scene?"valid":"null"),a.particleSystem&&(console.log("Particle system parent:",a.particleSystem.parent?a.particleSystem.parent.type:"none"),console.log("Particle system visible:",a.particleSystem.visible),console.log("Particle system frustumCulled:",a.particleSystem.frustumCulled)),a.flameLight?(console.log("------ FLAME LIGHT DEBUG ------"),console.log("Flame light intensity:",a.flameLight.intensity),console.log("Flame light distance:",a.flameLight.distance),console.log("Flame light position:",a.flameLight.position.x.toFixed(2),a.flameLight.position.y.toFixed(2),a.flameLight.position.z.toFixed(2)),console.log("Flame light casts shadow:",a.flameLight.castShadow),console.log("Flame light visible:",a.flameLight.visible),console.log("Flame light parent:",a.flameLight.parent?a.flameLight.parent.type:"none")):console.log("Flame light: NOT CREATED"),a.ambientGlowLight?(console.log("------ AMBIENT GLOW LIGHT DEBUG ------"),console.log("Ambient glow light intensity:",a.ambientGlowLight.intensity),console.log("Ambient glow light distance:",a.ambientGlowLight.distance),console.log("Ambient glow light position:",a.ambientGlowLight.position.x.toFixed(2),a.ambientGlowLight.position.y.toFixed(2),a.ambientGlowLight.position.z.toFixed(2)),console.log("Ambient glow light visible:",a.ambientGlowLight.visible)):console.log("Ambient glow light: NOT CREATED"),console.log("------ DEBUG VISUALIZERS ------"),console.log("Light debug sphere:",a.lightDebugSphere?"created":"none"),console.log("Glow debug sphere:",a.glowDebugSphere?"created":"none"),"Debug info printed"};window.analyzeSceneMaterials=function(){if(!Hn||!Hn.scene){console.log("[DEBUG] No flamethrower instance or scene found");return}const a=Hn.scene,e={};let t=0,n=0;return a.traverse(i=>{if(i.isMesh&&(t++,i.receiveShadow&&n++,i.material)){const s=i.material.type;e[s]=(e[s]||0)+1,console.log(`Object: ${i.name||"unnamed"} - Material: ${s} - Receives Shadows: ${i.receiveShadow}`),s==="MeshStandardMaterial"?console.log(`  Roughness: ${i.material.roughness}, Metalness: ${i.material.metalness}`):s==="MeshPhongMaterial"&&console.log(`  Shininess: ${i.material.shininess}, Specular: ${i.material.specular?i.material.specular.getHexString():"none"}`)}}),console.log("------ SCENE MATERIAL ANALYSIS ------"),console.log(`Total objects: ${t}`),console.log(`Shadow receiving objects: ${n}`),console.log("Material types:",e),"Scene material analysis complete"};class yp extends mp{constructor(e,t={}){super(e,{name:"Flamethrower",damage:5,cooldown:.05,range:30,...t}),Hn=this,e||console.error("[DEBUG] Player is null in Flamethrower constructor"),e.scene||console.error("[DEBUG] Scene is null in Flamethrower constructor"),this.effects=this.effects||[],this.particles=[],this.particleCount=200,this.flameLength=25,this.flameWidth=2,this.particleSystem=null,this.flameLight=null,this.flameLightIntensity=5,this.flameLightDistance=30,this.flameLightColor=16733440,this.ambientGlowLight=null,this.ambientGlowIntensity=2,this.ambientGlowDistance=40,this.ambientGlowColor=16746564,this.useDynamicLighting=!0,this.debug=!0,this.recreationAttempted=!1,this.emergencyAttempted=!1,this.useEmergencySystem=!1,this.useCustomShaders=!1,this.flameOrigin=new w(0,0,0),this.flameDirection=new w(0,0,1),this.flameColors=[new ye(16733440).multiplyScalar(1.5),new ye(16750848).multiplyScalar(1.5),new ye(16711680).multiplyScalar(1.3),new ye(16776960).multiplyScalar(1.8)]}init(e){console.log("[DEBUG] Flamethrower init starting"),this.scene?console.log("[DEBUG] Scene is valid in Flamethrower init"):(console.error("[DEBUG] Scene is null in Flamethrower init"),this.player&&this.player.scene?(console.log("[DEBUG] Using player.scene as fallback"),this.scene=this.player.scene):this.player&&this.player.game&&this.player.game.scene?(console.log("[DEBUG] Using player.game.scene as fallback"),this.scene=this.player.game.scene):(console.error("[DEBUG] No scene available, dynamic lighting disabled"),this.useDynamicLighting=!1)),this.createWeaponModel();const t=!0;this.useCustomShaders=t,console.log("[DEBUG] Using alternative particle system implementation"),this.createParticleSystem2(),console.log("[DEBUG] Lighting setup stats:"),console.log("[DEBUG] - useDynamicLighting:",this.useDynamicLighting),console.log("[DEBUG] - scene available:",this.scene?"yes":"no"),this.scene&&this.useDynamicLighting&&this.enhanceSceneObjects(),this.useDynamicLighting?(console.log("[DEBUG] Creating flame lights now"),this.createFlameLight(),console.log("[DEBUG] After createFlameLight - flameLight created:",this.flameLight?"yes":"no","ambientGlowLight created:",this.ambientGlowLight?"yes":"no")):console.log("[DEBUG] Dynamic lighting is disabled, skipping light creation"),this.debug=!1,this.debug&&this.createDebugHelpers(),this.particles||(console.error("[DEBUG] Particles array is undefined, initializing empty array"),this.particles=[]),console.log(`[DEBUG] Flamethrower initialized - particle system: ${this.particleSystem?"created":"failed"}, particles: ${this.particles.length}`)}createWeaponModel(){const e=new It;if(this.modelGroup=e,!this.player||!this.scene){this.createSimpleGeometricModel(e);return}const t=gp("flamethrower");try{if(console.log("[DEBUG] Attempting to load flamethrower directly from:",t),t)this.loadModel(t,e);else{const n=["assets/models/weapons/flamethrower.glb","src/assets/models/weapons/flamethrower.glb","src/js/assets/models/weapons/flamethrower.glb","models/weapons/flamethrower.glb","flamethrower.glb"];console.log("[DEBUG] Will try these paths for the flamethrower model:"),n.forEach(i=>console.log("- "+i)),this.tryLoadingFromPaths(n,e,0)}}catch(n){console.error("[DEBUG] Error checking direct model path:",n),this.createSimpleGeometricModel(e)}if(e.position.set(0,0,0),e.rotation.set(0,0,0),this.model=e,this.player.isFirstPerson&&this.player.fpCamera){this.weaponContainer=new It,this.weaponContainer.position.set(.3,-.9,-1.2),this.weaponContainer.add(this.model),this.player.fpCamera.add(this.weaponContainer),console.log("[DEBUG] Added weapon container to first-person camera");const n=new w;this.player.fpCamera.getWorldPosition(n),console.log("[DEBUG] Camera world position:",n.x.toFixed(2),n.y.toFixed(2),n.z.toFixed(2));const i=new w;this.model.getWorldPosition(i),console.log("[DEBUG] Model world position:",i.x.toFixed(2),i.y.toFixed(2),i.z.toFixed(2))}else this.player.model&&(this.player.model.add(this.model),console.log("[DEBUG] Added weapon model to player model"))}tryLoadingFromPaths(e,t,n){if(n>=e.length){console.log("[DEBUG] Tried all paths, falling back to geometric model"),this.createSimpleGeometricModel(t);return}const i=e[n],s=Xs?Xs(i):i;console.log(`[DEBUG] Trying path ${n+1}/${e.length}: ${s}`),new Hs().load(s,o=>{console.log("[DEBUG] Successfully loaded model from:",s),this.loadedModel=o.scene,o.scene.frustumCulled=!1,o.scene.traverse(l=>{l.frustumCulled=!1}),t.add(o.scene),o.scene.scale.set(1.7,1.7,1.7),o.scene.rotation.set(0,Math.PI/2,0)},void 0,o=>{console.log(`[DEBUG] Failed to load from ${s}:`,o),this.tryLoadingFromPaths(e,t,n+1)})}loadModel(e,t){new Hs().load(e,i=>{for(console.log("[DEBUG] Flamethrower model loaded successfully from:",e);t.children.length>0;){const h=t.children[0];t.remove(h),h.geometry&&h.geometry.dispose(),h.material&&(Array.isArray(h.material)?h.material.forEach(u=>u.dispose()):h.material.dispose())}this.loadedModel=i.scene,i.scene.frustumCulled=!1,i.scene.traverse(h=>{h.frustumCulled=!1}),t.add(i.scene),i.scene.scale.set(1.7,1.7,1.7);const r=new tn().setFromObject(i.scene).getSize(new w);console.log("[DEBUG] Model size:",r.x.toFixed(2),r.y.toFixed(2),r.z.toFixed(2)),i.scene.rotation.set(0,0,0),console.log("[DEBUG] Attempting to correct model orientation");const o=this.findObjectByName(i.scene,"FlamethrowerElonMusk_2");if(o){console.log("[DEBUG] Found main flamethrower part");const h=new tn().setFromObject(o),u=h.getSize(new w),d=h.getCenter(new w);console.log("[DEBUG] Flamethrower part size:",u.x.toFixed(2),u.y.toFixed(2),u.z.toFixed(2)),console.log("[DEBUG] Flamethrower part center:",d.x.toFixed(2),d.y.toFixed(2),d.z.toFixed(2)),i.scene.rotation.set(0,Math.PI/2,0)}this.nozzleTipPosition=new w(0,0,1);const l=this.findObjectByName(i.scene,"FlamethrowerElonMusk_2");if(l){console.log("[DEBUG] Found main flamethrower part");const h=new tn().setFromObject(l),u=h.getSize(new w),d=h.getCenter(new w);console.log("[DEBUG] Flamethrower part size:",u.x.toFixed(2),u.y.toFixed(2),u.z.toFixed(2)),console.log("[DEBUG] Flamethrower part center:",d.x.toFixed(2),d.y.toFixed(2),d.z.toFixed(2)),this.nozzleTipPosition=new w(d.x,d.y,d.z+u.z/2)}let c=!1;if(i.scene.traverse(h=>{if(h.name&&console.log(`[DEBUG] Found named object in model: "${h.name}" (${h.type})`),h.name&&(h.name.toLowerCase().includes("nozzle")||h.name.toLowerCase().includes("tip")||h.name.toLowerCase().includes("barrel")||h.name.toLowerCase().includes("flame"))){console.log("[DEBUG] Found potential nozzle object in model:",h.name),h.updateWorldMatrix(!0,!1);const u=new w;h.getWorldPosition(u),t.updateWorldMatrix(!0,!1);const d=u.clone();t.worldToLocal(d),this.nozzleTipPosition.copy(d),c=!0,console.log("[DEBUG] Nozzle position set to:",this.nozzleTipPosition.x.toFixed(2),this.nozzleTipPosition.y.toFixed(2),this.nozzleTipPosition.z.toFixed(2))}h.isMesh&&(h.castShadow=!0,h.visible=!0,h.material&&(this.enhanceMaterial(h.material),h.material.transparent=!1,h.material.opacity=1,h.material.visible=!0,console.log(`[DEBUG] Material for ${h.name}:`,h.material.type,"visible:",h.material.visible,"transparent:",h.material.transparent)))}),c||console.log("[DEBUG] No nozzle found in model, using default position"),this.debug&&this.debugSphere&&(this.debugSphere.position.copy(this.nozzleTipPosition),this.debugLine)){const h=this.debugLine.geometry.attributes.position.array;h[0]=this.nozzleTipPosition.x,h[1]=this.nozzleTipPosition.y,h[2]=this.nozzleTipPosition.z,h[3]=this.nozzleTipPosition.x,h[4]=this.nozzleTipPosition.y,h[5]=this.nozzleTipPosition.z-.5,this.debugLine.geometry.attributes.position.needsUpdate=!0}},i=>{const s=i.loaded/i.total*100;console.log(`[DEBUG] Loading flamethrower model: ${s.toFixed(2)}%`)},i=>{console.error("[DEBUG] Error loading flamethrower model:",i),console.error("[DEBUG] Error message:",i.message),console.error("[DEBUG] Attempted to load from path:",e),console.log("[DEBUG] Plugin settings available:",window.jackalopePlanetSettings?"YES":"NO"),window.jackalopePlanetSettings&&console.log("[DEBUG] Plugin URL:",window.jackalopePlanetSettings.pluginUrl),console.log("[DEBUG] Falling back to simple geometric model"),this.createSimpleGeometricModel(t)})}findObjectByName(e,t){if(e.name===t)return e;for(let n=0;n<e.children.length;n++){const i=this.findObjectByName(e.children[n],t);if(i)return i}return null}createSimpleGeometricModel(e){const t=new qn(.1,.1,.4,16),n=new ct({color:4473924,metalness:.8,roughness:.2}),i=new Ae(t,n);i.rotation.x=Math.PI/2,i.position.set(.15,-.1,-.1),i.castShadow=!0,e.add(i);const s=new qn(.03,.05,.25,8),r=new ct({color:2236962,metalness:.5,roughness:.5}),o=new Ae(s,r);o.position.set(.15,-.1,.15),o.rotation.x=Math.PI/2,o.castShadow=!0,e.add(o),this.nozzleTipPosition=new w(o.position.x,o.position.y,o.position.z+.2)}updateModelPosition(){if(this.model){if(this.player.isFirstPerson&&this.player.fpCamera){if(this.weaponContainer||(console.log("[DEBUG] Creating missing weapon container"),this.weaponContainer=new It,this.weaponContainer.position.set(.3,-.9,-1.2),this.model.parent&&this.model.parent.remove(this.model),this.weaponContainer.add(this.model),this.player.fpCamera.add(this.weaponContainer)),this.player.velocity&&this.modelGroup){const e=Date.now()*.001,t=Math.sin(e*2)*.01,n=Math.sin(e*4)*.008;this.modelGroup.position.x=t,this.modelGroup.position.y=n}if(Math.random()<.01&&(console.log("[DEBUG] Model visibility check:"),this.weaponContainer?console.log("- Weapon container positioned at:",this.weaponContainer.position.x.toFixed(2),this.weaponContainer.position.y.toFixed(2),this.weaponContainer.position.z.toFixed(2)):console.log("- NO weapon container!"),this.loadedModel)){const e=this.player.fpCamera,t=new w;e.getWorldDirection(t);const n=new w;this.model.getWorldPosition(n);const i=new w;e.getWorldPosition(i);const s=new w().subVectors(n,i),r=s.length();s.normalize();const o=t.angleTo(s)*(180/Math.PI);if(console.log("- Model is",r.toFixed(2),"units away at angle",o.toFixed(2),"degrees"),console.log("- Model visible:",this.loadedModel.visible),console.log("- Model frustumCulled:",this.loadedModel.frustumCulled),this.loadedModel){const l=new bn;l.setFromQuaternion(this.loadedModel.quaternion),console.log("- Model rotation (radians):",l.x.toFixed(2),l.y.toFixed(2),l.z.toFixed(2)),console.log("- Model rotation (degrees):",(l.x*180/Math.PI).toFixed(2),(l.y*180/Math.PI).toFixed(2),(l.z*180/Math.PI).toFixed(2))}}}this.emitterDebugSphere&&this.flameOrigin&&(this.emitterDebugSphere.position.copy(this.flameOrigin),!this.emitterDebugSphere.parent&&this.scene&&this.scene.add(this.emitterDebugSphere))}}update(e){super.update(e),this.updateModelPosition(),this.debug&&Math.random()<.01&&this.weaponContainer&&this.nozzleTipPosition&&(console.log("[DEBUG] Nozzle tip position (local):",this.nozzleTipPosition.x.toFixed(2),this.nozzleTipPosition.y.toFixed(2),this.nozzleTipPosition.z.toFixed(2)),this.flameOrigin&&console.log("[DEBUG] Flame origin (world):",this.flameOrigin.x.toFixed(2),this.flameOrigin.y.toFixed(2),this.flameOrigin.z.toFixed(2)))}createParticleSystem(){const e=new Je,t=new Float32Array(this.particleCount*3),n=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount);console.log("[DEBUG] Creating particle system with",this.particleCount,"particles");for(let o=0;o<this.particleCount;o++)t[o*3]=0,t[o*3+1]=0,t[o*3+2]=0,n[o*3]=1,n[o*3+1]=.5,n[o*3+2]=0,i[o]=0,this.particles.push({position:new w,velocity:new w,color:new ye(1,.5,0),size:0,life:0,maxLife:0});e.setAttribute("position",new We(t,3)),e.setAttribute("color",new We(n,3)),e.setAttribute("size",new We(i,1));const s=this.createFlameTexture();console.log("[DEBUG] Flame texture created:",s?"success":"failed");const r=new vi({size:2,map:s,transparent:!0,vertexColors:!0,blending:2,depthWrite:!1,sizeAttenuation:!0});this.particleSystem=new fi(e,r),this.particleSystem.frustumCulled=!1,this.scene?(this.scene.add(this.particleSystem),this.effects.push(this.particleSystem),console.log("[DEBUG] Particle system added to scene (effects array size:",this.effects.length,")")):console.error("[DEBUG] Cannot add particle system: scene is null")}createFlameTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.2,"rgba(255, 240, 120, 1)"),n.addColorStop(.4,"rgba(255, 160, 50, 0.9)"),n.addColorStop(.7,"rgba(255, 80, 10, 0.6)"),n.addColorStop(1,"rgba(255, 50, 0, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new Bd(e);return i.needsUpdate=!0,i}createDebugHelpers(){const e=new en(.05,8,8),t=new xt({color:16711680});this.debugSphere=new Ae(e,t),this.debugSphere.position.copy(this.nozzleTipPosition);const n=new en(.03,8,8),i=new xt({color:65280});this.emitterDebugSphere=new Ae(n,i),this.scene?(this.scene.add(this.debugSphere),this.scene.add(this.emitterDebugSphere),console.log("[DEBUG] Added debug helpers to scene")):this.model&&(this.model.add(this.debugSphere),console.log("[DEBUG] Added debug helpers to model (scene not available)"));const s=new Je,r=new Float32Array([this.nozzleTipPosition.x,this.nozzleTipPosition.y,this.nozzleTipPosition.z,this.nozzleTipPosition.x,this.nozzleTipPosition.y,this.nozzleTipPosition.z-.5]);s.setAttribute("position",new We(r,3));const o=new es({color:65280});if(this.debugLine=new ts(s,o),this.useDynamicLighting){const l=new en(.2,8,8),c=new xt({color:this.flameLightColor,transparent:!0,opacity:.6});this.lightDebugSphere=new Ae(l,c);const h=new en(.3,8,8),u=new xt({color:this.ambientGlowColor,transparent:!0,opacity:.4});this.glowDebugSphere=new Ae(h,u),this.scene&&(this.scene.add(this.lightDebugSphere),this.scene.add(this.glowDebugSphere),this.effects.push(this.lightDebugSphere),this.effects.push(this.glowDebugSphere),console.log("[DEBUG] Added light visualization helpers to scene"))}this.model&&(this.model.add(this.debugSphere),this.model.add(this.debugLine)),console.log("[DEBUG] Debug helpers created at position:",this.nozzleTipPosition.x.toFixed(2),this.nozzleTipPosition.y.toFixed(2),this.nozzleTipPosition.z.toFixed(2))}fire(){return super.fire()?(this.debug&&(console.log("[DEBUG] Flamethrower fired! Scene has",this.scene?"valid scene":"NO SCENE"),this.scene&&console.log("[DEBUG] Scene children:",this.scene.children.length,"Effects:",this.effects.length)),this.emitParticles(),!0):!1}emitParticles(){if(this.particles||(console.error("[DEBUG] Particles array is undefined, initializing empty array"),this.particles=[]),!this.particleSystem||!this.particles.length){if(console.log("[DEBUG] Particle diagnostic:"),console.log(`[DEBUG] - this.particleSystem exists: ${this.particleSystem?"yes":"no"}`),console.log(`[DEBUG] - this.particles.length: ${this.particles?this.particles.length:"undefined"}`),console.log(`[DEBUG] - this.scene exists: ${this.scene?"yes":"no"}`),this.useCustomShaders&&console.log("[DEBUG] Using custom shader implementation"),console.log("[DEBUG] Attempting to recreate particle system..."),this.particleSystem){console.warn("[DEBUG] Cannot emit particles: system not ready");return}else if(this.recreationAttempted){console.warn("[DEBUG] Cannot emit particles: system not ready after previous recreation attempt");return}else if(this.recreationAttempted=!0,this.useCustomShaders?this.createParticleSystem():this.createParticleSystem2(),console.log("[DEBUG] Particle system recreation attempt complete"),this.useDynamicLighting&&(!this.flameLight||!this.ambientGlowLight)&&(console.log("[DEBUG] Attempting to recreate flame lights..."),this.createFlameLight()),!this.particleSystem||!this.particles.length){console.warn("[DEBUG] Cannot emit particles: system not ready after recreation attempt");return}}let e=new w(0,0,0),t=new w(0,0,-1);if(this.player&&this.player.isFirstPerson&&this.player.fpCamera){const s=this.player.fpCamera;if(Math.random()<.05){const r=new w;s.getWorldPosition(r),console.log("[DEBUG] Camera position:",r.x.toFixed(2),r.y.toFixed(2),r.z.toFixed(2)),this.model&&console.log("[DEBUG] Weapon model position relative to camera:",this.model.position.x.toFixed(2),this.model.position.y.toFixed(2),this.model.position.z.toFixed(2))}if(this.weaponContainer&&this.nozzleTipPosition){s.getWorldPosition(e),s.getWorldDirection(t);const r=new w,o=new w;this.weaponContainer&&(o.copy(this.weaponContainer.position),o.x+=.15,o.y+=-.1,o.z+=.35,s.localToWorld(r.copy(o)),e.copy(r))}else s.getWorldPosition(e),e.add(new w(t.x*.5+.2,t.y*.5-.3,t.z*.5));if(this.flameOrigin.copy(e),this.flameDirection.copy(t),this.useDynamicLighting&&(!this.flameLight||!this.ambientGlowLight)&&(console.log("[DEBUG] Lights missing but dynamic lighting enabled, creating now"),this.createFlameLight()),this.flameLight&&this.useDynamicLighting){this.flameLight.position.copy(e);const r=t.clone().multiplyScalar(1);this.flameLight.position.add(r),this.flameLight.updateMatrix(),this.flameLight.updateMatrixWorld(),this.ambientGlowLight&&(this.ambientGlowLight.position.copy(e),this.ambientGlowLight.updateMatrix(),this.ambientGlowLight.updateMatrixWorld()),this.debug&&console.log("[DEBUG] Updated flame light position:",this.flameLight.position.x.toFixed(2),this.flameLight.position.y.toFixed(2),this.flameLight.position.z.toFixed(2))}this.debug&&console.log("[DEBUG] First-person flame direction:",this.flameDirection.x.toFixed(2),this.flameDirection.y.toFixed(2),this.flameDirection.z.toFixed(2))}else if(this.player&&this.player.model){this.model.updateMatrixWorld(!0);const s=new w;if(s.copy(this.nozzleTipPosition),s.applyMatrix4(this.model.matrixWorld),this.flameOrigin.copy(s),this.player.model.getWorldDirection(this.flameDirection),this.flameLight&&this.useDynamicLighting){this.flameLight.position.copy(s);const r=this.flameDirection.clone().multiplyScalar(2);this.flameLight.position.add(r),this.flameLight.updateMatrix(),this.flameLight.updateMatrixWorld(),this.ambientGlowLight&&(this.ambientGlowLight.position.copy(s),this.ambientGlowLight.updateMatrix(),this.ambientGlowLight.updateMatrixWorld())}this.debug&&console.log("[DEBUG] Third-person flame direction:",this.flameDirection.x.toFixed(2),this.flameDirection.y.toFixed(2),this.flameDirection.z.toFixed(2))}const n=15;let i=0;for(let s=0;s<this.particleCount&&i<n;s++){const r=this.particles[s];if(r.life>0)continue;i++,r.position.copy(this.flameOrigin);const o=.1,l=new w((Math.random()-.5)*o,(Math.random()-.5)*o+.05,(Math.random()-.5)*o),c=20+Math.random()*10;r.velocity.copy(this.flameDirection).normalize().multiplyScalar(c),r.velocity.add(l);const h=Math.floor(Math.random()*this.flameColors.length);r.color.copy(this.flameColors[h]),r.size=1+Math.random()*2,r.maxLife=1.5+Math.random()*1,r.life=r.maxLife,i===1&&this.debug&&console.log("[DEBUG] First particle position:",r.position.x.toFixed(2),r.position.y.toFixed(2),r.position.z.toFixed(2))}this.debug&&console.log("[DEBUG] Emitted",i,"particles")}updateEffects(e){if(this.particles||(console.error("[DEBUG] Particles array is undefined, initializing empty array"),this.particles=[]),!this.particleSystem||!this.particles.length){this.isFiring&&!this.emergencyAttempted&&(this.emergencyAttempted=!0,console.log("[DEBUG] No particle system available - trying emergency fallback"),this.createEmergencyParticleSystem()&&(this.useEmergencySystem=!0));return}if(this.useEmergencySystem){this.updateEmergencyParticles(e);return}if(this.particleSystem.geometry.attributes.lifetime){this.updateCustomShaderEffects(e);return}const t=this.particleSystem.geometry.attributes.position.array,n=this.particleSystem.geometry.attributes.color.array,i=this.particleSystem.geometry.attributes.size.array;let s=0,r=0,o=0,l=0,c=0;for(let h=0;h<this.particleCount;h++){const u=this.particles[h];if(u.life<=0)continue;s++,u.life-=e,u.position.addScaledVector(u.velocity,e),u.velocity.y+=1*e,u.velocity.multiplyScalar(.97);const d=u.position.distanceTo(this.flameOrigin);d>c&&(c=d),r+=u.position.x,o+=u.position.y,l+=u.position.z;const f=u.life/u.maxLife,g=h*3;f>.6?(n[g]=1,n[g+1]=.5+f*.5,n[g+2]=0):(n[g]=1,n[g+1]=.5*(f/.6),n[g+2]=0),t[g]=u.position.x,t[g+1]=u.position.y,t[g+2]=u.position.z,i[h]=u.size*(f<.3?f/.3:1)}if(this.particleSystem.geometry.attributes.position.needsUpdate=!0,this.particleSystem.geometry.attributes.color.needsUpdate=!0,this.particleSystem.geometry.attributes.size.needsUpdate=!0,this.flameLight&&this.useDynamicLighting&&s>0){const h=Math.min(1,s/50);if(this.flameLight.intensity=this.isFiring?this.flameLightIntensity*h:Math.max(0,this.flameLight.intensity-e*2),this.isFiring){const u=(Math.random()-.5)*.3;this.flameLight.intensity*=1+u;const d=Math.random()>.7?.05:0,f=1+(Math.random()-.5)*.1;this.flameLight.color.setHSL(d,1,.5*f),Math.random()<.05&&console.log("[DEBUG] Flame light updated - intensity:",this.flameLight.intensity.toFixed(2),"color:",this.flameLight.color.getHexString())}if(s>10){const u=new w(r/s,o/s,l/s);if(this.flameLight.position.copy(u),this.flameLight.distance=Math.max(this.flameLightDistance,c*1.5),Math.random()<.05&&console.log("[DEBUG] Flame light position (particle center):",this.flameLight.position.x.toFixed(2),this.flameLight.position.y.toFixed(2),this.flameLight.position.z.toFixed(2)),this.lightDebugSphere&&(this.lightDebugSphere.position.copy(this.flameLight.position),this.lightDebugSphere.visible=this.isFiring),this.ambientGlowLight){const d=new w().copy(this.flameOrigin).lerp(u,.3);this.ambientGlowLight.position.copy(d),this.glowDebugSphere&&(this.glowDebugSphere.position.copy(this.ambientGlowLight.position),this.glowDebugSphere.visible=this.isFiring),this.ambientGlowLight.intensity=this.isFiring?this.ambientGlowIntensity*h*.8:Math.max(0,this.ambientGlowLight.intensity-e),this.ambientGlowLight.distance=Math.max(this.ambientGlowDistance,c*2.5),Math.random()<.05&&console.log("[DEBUG] Ambient glow intensity:",this.ambientGlowLight.intensity.toFixed(2),"distance:",this.ambientGlowLight.distance.toFixed(2))}this.isFiring&&!this.secondaryLights&&this.createSecondaryLights(),this.secondaryLights&&this.secondaryLights.length>0&&this.updateSecondaryLights(s,h)}}else this.flameLight&&console.log("[DEBUG] Flame light conditions not met:",this.useDynamicLighting?"Dynamic lighting on":"Dynamic lighting off","Active particles:",s);this.debug&&this.isFiring&&console.log(`Active particles: ${s}`)}startFire(){this.isFiring=!0,this.useDynamicLighting&&(!this.flameLight||!this.ambientGlowLight)&&(console.log("[DEBUG] Creating missing flame lights in startFire"),this.createFlameLight()),this.flameLight&&this.useDynamicLighting?(this.flameLight.intensity=this.flameLightIntensity,console.log("[DEBUG] Flame light enabled with intensity:",this.flameLightIntensity)):console.log("[DEBUG] Flame light not available:",this.flameLight?"Light exists":"No light",this.useDynamicLighting?"Dynamic lighting on":"Dynamic lighting off"),this.ambientGlowLight&&this.useDynamicLighting?(this.ambientGlowLight.intensity=this.ambientGlowIntensity,console.log("[DEBUG] Ambient glow light enabled with intensity:",this.ambientGlowIntensity)):console.log("[DEBUG] Ambient glow light not available:",this.ambientGlowLight?"Light exists":"No light"),this.debug&&console.log("Flamethrower: Started firing")}stopFire(){this.isFiring=!1,this.flameLight&&this.useDynamicLighting&&(this.flameLight.intensity=0),this.ambientGlowLight&&this.useDynamicLighting&&(this.ambientGlowLight.intensity=0),this.debug&&console.log("Flamethrower: Stopped firing")}cleanup(){if(super.cleanup(),this.weaponContainer&&(this.weaponContainer.parent&&this.weaponContainer.parent.remove(this.weaponContainer),this.weaponContainer=null),this.secondaryLights){for(let e=0;e<this.secondaryLights.length;e++){const t=this.secondaryLights[e];t.light&&(t.light.parent&&t.light.parent.remove(t.light),t.light=null)}this.secondaryLights=null}this.loadedModel&&(this.loadedModel.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>this.disposeMaterial(t)):this.disposeMaterial(e.material)))}),this.loadedModel.parent&&this.loadedModel.parent.remove(this.loadedModel),this.loadedModel=null),this.debugSphere&&(this.debugSphere.parent&&this.debugSphere.parent.remove(this.debugSphere),this.debugSphere.geometry.dispose(),this.debugSphere.material.dispose(),this.debugSphere=null),this.debugLine&&(this.debugLine.geometry&&this.debugLine.geometry.dispose(),this.debugLine.material&&this.debugLine.material.dispose(),this.debugLine=null),this.lightDebugSphere&&(this.lightDebugSphere.parent&&this.lightDebugSphere.parent.remove(this.lightDebugSphere),this.lightDebugSphere.geometry.dispose(),this.lightDebugSphere.material.dispose(),this.lightDebugSphere=null),this.glowDebugSphere&&(this.glowDebugSphere.parent&&this.glowDebugSphere.parent.remove(this.glowDebugSphere),this.glowDebugSphere.geometry.dispose(),this.glowDebugSphere.material.dispose(),this.glowDebugSphere=null),this.flameLight&&(this.flameLight.parent&&this.flameLight.parent.remove(this.flameLight),this.flameLight=null),this.ambientGlowLight&&(this.ambientGlowLight.parent&&this.ambientGlowLight.parent.remove(this.ambientGlowLight),this.ambientGlowLight=null),this.particles=[]}disposeMaterial(e){if(e){for(const t in e){const n=e[t];n&&n.isTexture&&n.dispose()}e.dispose()}}createParticleSystem2(){console.log("[DEBUG] Creating particle system with custom shaders");const e=new Je,t=new Float32Array(this.particleCount*3),n=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount);for(let h=0;h<this.particleCount;h++)t[h*3]=0,t[h*3+1]=-1e3,t[h*3+2]=0,n[h*3]=1,n[h*3+1]=.5,n[h*3+2]=0,i[h]=0,s[h]=0,this.particles.push({position:new w(0,-1e3,0),velocity:new w,color:new ye(1,.5,0),size:0,life:0,maxLife:0});e.setAttribute("position",new We(t,3)),e.setAttribute("color",new We(n,3)),e.setAttribute("size",new We(i,1)),e.setAttribute("lifetime",new We(s,1));const r=this.createFlameTexture(),o=`
            attribute float size;
            attribute float lifetime;
            attribute vec3 color;
            
            varying float vLifetime;
            varying vec3 vColor;
            
            void main() {
                vLifetime = lifetime;
                vColor = color;
                
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (350.0 / -mvPosition.z); // Increased from 300 to 350 for larger particles
                gl_Position = projectionMatrix * mvPosition;
            }
        `,l=`
            uniform sampler2D diffuseTexture;
            
            varying float vLifetime;
            varying vec3 vColor;
            
            void main() {
                if (vLifetime <= 0.0) discard;
                
                vec4 texColor = texture2D(diffuseTexture, gl_PointCoord);
                
                // Boost brightness for emissive glow effect
                vec3 glowColor = vColor * 1.5; // Increased brightness by 50%
                
                // Apply additional glow effect based on lifetime
                glowColor += vec3(0.2, 0.05, 0.0) * vLifetime; // Add orange-ish highlight
                
                // Final color with alpha
                gl_FragColor = vec4(glowColor, texColor.a * min(vLifetime * 2.0, 1.0));
            }
        `,c=new un({uniforms:{diffuseTexture:{value:r}},vertexShader:o,fragmentShader:l,transparent:!0,blending:2,depthWrite:!1});this.particleSystem=new fi(e,c),this.particleSystem.frustumCulled=!1,this.scene?(this.scene.add(this.particleSystem),this.effects.push(this.particleSystem),console.log("[DEBUG] Custom shader particle system added to scene (effects array size:",this.effects.length,")")):console.error("[DEBUG] Cannot add particle system: scene is null")}updateCustomShaderEffects(e){if(this.particles||(console.error("[DEBUG] Particles array is undefined in updateCustomShaderEffects, initializing empty array"),this.particles=[]),!this.particleSystem||!this.particles.length)return;const t=this.particleSystem.geometry.attributes.position.array,n=this.particleSystem.geometry.attributes.color.array,i=this.particleSystem.geometry.attributes.size.array,s=this.particleSystem.geometry.attributes.lifetime.array;let r=0,o=0,l=0,c=0,h=0;for(let u=0;u<this.particleCount;u++){const d=this.particles[u];if(d.life<=0)continue;r++,d.life-=e,d.position.addScaledVector(d.velocity,e),d.velocity.y+=1*e,d.velocity.multiplyScalar(.97);const f=d.position.distanceTo(this.flameOrigin);f>h&&(h=f),o+=d.position.x,l+=d.position.y,c+=d.position.z;const g=d.life/d.maxLife,p=u*3;t[p]=d.position.x,t[p+1]=d.position.y,t[p+2]=d.position.z,g>.5?(n[p]=1,n[p+1]=.3+g*.7,n[p+2]=0):(n[p]=1,n[p+1]=.3*g*2,n[p+2]=0),i[u]=d.size*(g<.3?g/.3:1),s[u]=g}if(this.particleSystem.geometry.attributes.position.needsUpdate=!0,this.particleSystem.geometry.attributes.color.needsUpdate=!0,this.particleSystem.geometry.attributes.size.needsUpdate=!0,this.particleSystem.geometry.attributes.lifetime.needsUpdate=!0,this.flameLight&&this.useDynamicLighting&&r>0){const u=Math.min(1,r/50);if(this.flameLight.intensity=this.isFiring?this.flameLightIntensity*u:Math.max(0,this.flameLight.intensity-e*2),this.isFiring){const d=(Math.random()-.5)*.3;this.flameLight.intensity*=1+d;const f=Math.random()>.7?.05:0,g=1+(Math.random()-.5)*.1;this.flameLight.color.setHSL(f,1,.5*g),Math.random()<.05&&console.log("[DEBUG] Flame light updated - intensity:",this.flameLight.intensity.toFixed(2),"color:",this.flameLight.color.getHexString())}if(r>10){const d=new w(o/r,l/r,c/r);if(this.flameLight.position.copy(d),this.flameLight.distance=Math.max(this.flameLightDistance,h*1.5),Math.random()<.05&&console.log("[DEBUG] Flame light position (particle center):",this.flameLight.position.x.toFixed(2),this.flameLight.position.y.toFixed(2),this.flameLight.position.z.toFixed(2)),this.lightDebugSphere&&(this.lightDebugSphere.position.copy(this.flameLight.position),this.lightDebugSphere.visible=this.isFiring),this.ambientGlowLight){const f=new w().copy(this.flameOrigin).lerp(d,.3);this.ambientGlowLight.position.copy(f),this.glowDebugSphere&&(this.glowDebugSphere.position.copy(this.ambientGlowLight.position),this.glowDebugSphere.visible=this.isFiring),this.ambientGlowLight.intensity=this.isFiring?this.ambientGlowIntensity*u*.8:Math.max(0,this.ambientGlowLight.intensity-e),this.ambientGlowLight.distance=Math.max(this.ambientGlowDistance,h*2.5),Math.random()<.05&&console.log("[DEBUG] Ambient glow intensity:",this.ambientGlowLight.intensity.toFixed(2),"distance:",this.ambientGlowLight.distance.toFixed(2))}this.isFiring&&!this.secondaryLights&&this.createSecondaryLights(),this.secondaryLights&&this.secondaryLights.length>0&&this.updateSecondaryLights(r,u)}}else this.flameLight&&console.log("[DEBUG] Flame light conditions not met:",this.useDynamicLighting?"Dynamic lighting on":"Dynamic lighting off","Active particles:",r);this.debug&&this.isFiring&&console.log("[DEBUG] Active custom shader particles:",r)}createEmergencyParticleSystem(){console.log("[DEBUG] Creating emergency fallback particle system");try{const e=new Je,t=[];for(let r=0;r<100;r++)t.push(0,0,0);const n=new Ge(t,3);e.setAttribute("position",n);const i=this.createFlameTexture(),s=new vi({size:7,color:16742144,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1,blending:2,map:i});this.particleSystem=new fi(e,s),this.particleSystem.frustumCulled=!1,this.particles=[];for(let r=0;r<100;r++)this.particles.push({position:new w,velocity:new w,color:new ye(1,.7,.3),size:7,life:0,maxLife:0});return this.useDynamicLighting&&!this.flameLight&&(this.flameLight=new Gn(16733440,0,this.flameLightDistance||15),this.flameLight.castShadow=!0,this.scene&&(this.scene.add(this.flameLight),this.effects.push(this.flameLight),console.log("[DEBUG] Emergency flame light added to scene"))),this.scene?(this.scene.add(this.particleSystem),this.effects.push(this.particleSystem),console.log("[DEBUG] Emergency particle system added to scene"),!0):(console.error("[DEBUG] Cannot add emergency particle system: scene is null"),!1)}catch(e){return console.error("[DEBUG] Failed to create emergency particle system:",e),!1}}updateEmergencyParticles(e){if(this.particles||(console.error("[DEBUG] Particles array is undefined in updateEmergencyParticles, initializing empty array"),this.particles=[]),!this.particleSystem||!this.particles.length)return;const t=this.particleSystem.geometry.attributes.position.array;let n=new w(0,0,0),i=new w(0,0,-1);if(this.player&&this.player.isFirstPerson&&this.player.fpCamera){const o=this.player.fpCamera;o.getWorldPosition(n),o.getWorldDirection(i),n.add(new w(i.x*.5+.2,i.y*.5-.3,i.z*.5))}else if(this.player&&this.player.model){this.model.updateMatrixWorld(!0);const o=new w;o.copy(this.nozzleTipPosition),o.applyMatrix4(this.model.matrixWorld),n.copy(o),this.player.model.getWorldDirection(i)}let s=0,r=0;for(let o=0;o<this.particles.length;o++){const l=this.particles[o];if(l.life>0){l.life-=e,l.position.addScaledVector(l.velocity,e),l.velocity.y+=1*e;const c=o*3;t[c]=l.position.x,t[c+1]=l.position.y,t[c+2]=l.position.z,s++,r+=l.position.distanceTo(n)}if(this.isFiring&&l.life<=0&&s<30){l.position.copy(n);const c=20+Math.random()*10;l.velocity.copy(i).multiplyScalar(c),l.velocity.x+=(Math.random()-.5)*2,l.velocity.y+=(Math.random()-.5)*2+.5,l.velocity.z+=(Math.random()-.5)*2,l.maxLife=1+Math.random()*1,l.life=l.maxLife,s++}}if(this.particleSystem.geometry.attributes.position.needsUpdate=!0,this.flameLight&&this.useDynamicLighting){const o=Math.min(1,s/20);if(this.flameLight.intensity=this.isFiring?this.flameLightIntensity*1.5*o:Math.max(0,this.flameLight.intensity-e*2),s>0){const l=i.clone().multiplyScalar(3);this.flameLight.position.copy(n).add(l);const c=(Math.random()-.5)*.4;if(this.flameLight.intensity*=1+c,Math.random()>.9){const h=Math.random()>.5?16724736:16742144;this.flameLight.color.set(h)}}}this.debug&&this.isFiring&&console.log(`[DEBUG] Active emergency particles: ${s}`)}createFlameLight(){if(console.log("[DEBUG] Creating flame light with color:",this.flameLightColor,"and distance:",this.flameLightDistance),!this.scene)if(console.error("[DEBUG] Cannot create flame light: scene is still null"),this.player&&this.player.scene)console.log("[DEBUG] Using player.scene fallback for light creation"),this.scene=this.player.scene;else if(this.player&&this.player.game&&this.player.game.scene)console.log("[DEBUG] Using player.game.scene fallback for light creation"),this.scene=this.player.game.scene;else{console.error("[DEBUG] No scene available for light creation, aborting");return}try{if(this.flameLight=new Gn(this.flameLightColor,0,this.flameLightDistance,1),this.flameLight.castShadow=!0,this.flameLight.decay=1.5,this.flameLight.shadow.mapSize.width=1024,this.flameLight.shadow.mapSize.height=1024,this.flameLight.shadow.camera.near=.1,this.flameLight.shadow.camera.far=this.flameLightDistance,this.flameLight.shadow.bias=-.005,this.flameLight.position.copy(this.flameOrigin),console.log("[DEBUG] Flame light created successfully:",this.flameLight.uuid),this.scene){this.scene.add(this.flameLight),this.effects||(console.error("[DEBUG] Effects array is undefined, initializing"),this.effects=[]),this.effects.push(this.flameLight),console.log("[DEBUG] Checking scene materials for light interaction:");let e=0,t=0,n=0;this.scene.traverse(i=>{i.isMesh&&(e++,i.receiveShadow&&t++,i.castShadow&&n++,e<=5&&i.material&&console.log(`[DEBUG] Object material [${i.name||"unnamed"}]:`,"type:",i.material.type,"receiveShadow:",i.receiveShadow,"castShadow:",i.castShadow))}),console.log(`[DEBUG] Scene contains ${e} meshes, ${t} receive shadows, ${n} cast shadows`),console.log("[DEBUG] Flame light added to scene. Scene children:",this.scene.children.length)}else console.error("[DEBUG] Cannot add flame light: scene is null");try{console.log("[DEBUG] Creating ambient glow light with color:",this.ambientGlowColor,"and distance:",this.ambientGlowDistance),this.ambientGlowLight=new Gn(this.ambientGlowColor,0,this.ambientGlowDistance,1),this.ambientGlowLight.castShadow=!1,this.ambientGlowLight.decay=1,this.ambientGlowLight.position.copy(this.flameOrigin),this.scene?(this.scene.add(this.ambientGlowLight),this.effects||(console.error("[DEBUG] Effects array is undefined, initializing"),this.effects=[]),this.effects.push(this.ambientGlowLight),console.log("[DEBUG] Ambient glow light added to scene. Total effects:",this.effects.length)):console.error("[DEBUG] Cannot add ambient glow light: scene is null")}catch(e){console.error("[DEBUG] Error creating ambient glow light:",e)}}catch(e){console.error("[DEBUG] Error creating flame light:",e)}console.log("[DEBUG] Light creation complete -","Flame light:",this.flameLight?"created":"failed","Ambient glow:",this.ambientGlowLight?"created":"failed")}enhanceSceneObjects(){console.log("[DEBUG] Enhancing scene objects for better light reception");let e=0;this.scene.traverse(t=>{t.isMesh&&(t.receiveShadow=!0,t.material&&(Array.isArray(t.material)?t.material.forEach(n=>this.enhanceMaterial(n)):this.enhanceMaterial(t.material),e++))}),console.log(`[DEBUG] Enhanced ${e} objects to receive lighting properly`)}enhanceMaterial(e){e&&e.type!=="MeshBasicMaterial"&&(e.needsUpdate=!0,(e.type==="MeshStandardMaterial"||e.type==="MeshPhysicalMaterial")&&(e.roughness>.95&&(e.roughness=.9),e.metalness<.05&&(e.metalness=.1)),(e.type==="MeshPhongMaterial"||e.type==="MeshLambertMaterial")&&(e.shininess=Math.max(e.shininess||0,10),e.specular=e.specular||new ye(1118481)))}createSecondaryLights(){if(!this.scene||!this.useDynamicLighting)return;console.log("[DEBUG] Creating secondary particle lights"),this.secondaryLights=[];const e=3;for(let t=0;t<e;t++){const n=new Gn(this.flameLightColor,this.flameLightIntensity*.3,this.flameLightDistance*.6,1.5);n.castShadow=!1,n.position.copy(this.flameOrigin),this.scene.add(n),this.effects.push(n),this.secondaryLights.push({light:n,targetParticleIdx:Math.floor(Math.random()*this.particleCount),lifespan:0})}console.log(`[DEBUG] Created ${e} secondary particle lights`)}updateSecondaryLights(e,t){if(!(!this.secondaryLights||!this.isFiring))for(let n=0;n<this.secondaryLights.length;n++){const i=this.secondaryLights[n];if(i.lifespan-=.05,i.lifespan<=0){let r=0,o=!1;for(;!o&&r<20;){const l=Math.floor(Math.random()*this.particleCount),c=this.particles[l];c&&c.life>.5&&(i.targetParticleIdx=l,i.lifespan=.5+Math.random()*.5,o=!0),r++}!o&&this.flameLight&&(i.light.position.copy(this.flameLight.position),i.light.position.x+=(Math.random()-.5)*2,i.light.position.y+=(Math.random()-.5)*2,i.light.position.z+=(Math.random()-.5)*2)}const s=i.targetParticleIdx;if(s>=0&&s<this.particleCount){const r=this.particles[s];if(r&&r.life>0){i.light.position.copy(r.position);const o=r.life/r.maxLife;i.light.intensity=this.flameLightIntensity*.3*t*o;const l=.8+Math.random()*.4;i.light.intensity*=l,o>.6?i.light.color.set(16749824):i.light.color.set(16726016)}}}}}class _p extends ta{constructor(e,t={}){super(e,{eyeHeight:1.6,...t}),this.thirdPersonDistance=t.thirdPersonDistance||5,this.thirdPersonHeight=t.thirdPersonHeight||2,this.cameraTarget=new w,this.fpCamera=null,this.isFirstPerson=t.isFirstPerson||!1,this.weapon=null,this.isFiring=!1,this.isActive=!0,console.log("HumanPlayer constructor - first person mode:",this.isFirstPerson),this.setPhysics(new dp(t.physics||{})),this.setMovement(new fp(t.movement||{})),this.setControls(new pp({firstPersonMode:this.isFirstPerson,...t.controls||{}})),this.controls&&typeof this.controls.setCameraZoomCallback=="function"?this.controls.setCameraZoomCallback(this.adjustCameraDistance.bind(this)):console.warn("HumanPlayer: controls.setCameraZoomCallback is not available"),this.init(),this.isFirstPerson&&(this.setupFirstPersonCamera(),this.toggleViewMode(!0),setTimeout(()=>{this.isActive&&this.isFirstPerson&&this.fpCamera&&this.game&&(console.log("Ensuring first-person camera is active after small delay"),this.game.setActiveCamera(this.fpCamera))},100))}init(){if(console.log("HumanPlayer: Starting initialization"),!this.game||!this.game.assetLoader){console.error("HumanPlayer: Game or AssetLoader not available!");return}console.log("HumanPlayer: Requesting human model from AssetLoader");try{if(this.model=this.game.assetLoader.createHumanModel(),!this.model){console.error("HumanPlayer: Failed to create human model");return}console.log("HumanPlayer: Model created successfully"),this.model.position.set(0,1,0),console.log("HumanPlayer: Model position set to:",this.model.position),console.log("HumanPlayer: Setting up shadows for model"),this.model.traverse(e=>{e instanceof Ae&&(e.castShadow=!0,e.receiveShadow=!0,console.log("HumanPlayer: Enabled shadows for mesh:",e.uuid))}),console.log("HumanPlayer: Adding model to scene"),this.scene.add(this.model),this.position.copy(this.model.position),console.log("HumanPlayer: Model added to scene. Position:",this.model.position),console.log("HumanPlayer: Model parent:",this.model.parent?this.model.parent.uuid:"none"),console.log("HumanPlayer: Model visible:",this.model.visible),console.log("HumanPlayer: Model children count:",this.model.children.length),console.log("HumanPlayer: Setting up initial camera position"),this.updateCameraPosition(),console.log("HumanPlayer: Initializing weapon system"),this.initWeapon(),console.log("HumanPlayer: Initialization complete")}catch(e){console.error("HumanPlayer: Error during initialization:",e)}}initWeapon(){this.isFirstPerson&&(this.weapon=new yp(this),console.log("Flamethrower weapon initialized"))}setupFirstPersonCamera(){if(console.log("Setting up first-person camera"),!this.model||!this.isActive){console.error("Cannot setup first-person camera: model not initialized or player not active");return}this.fpCamera||(this.fpCamera=new lt(75,window.innerWidth/window.innerHeight,.1,1e3),console.log("First-person camera created")),this.fpCamera.position.set(0,this.eyeHeight,0),this.fpCamera.parent&&this.fpCamera.parent.remove(this.fpCamera),this.model.add(this.fpCamera),console.log("First-person camera added to model:",this.model.uuid),this.fpCamera.rotation.set(0,0,0),this.fpCamera.updateProjectionMatrix(),this.model.traverse(e=>{if(e instanceof Ae){const t=e.name&&e.name.toLowerCase().includes("arm"),n=new w;e.getWorldPosition(n);const i=Math.abs(n.x)>.3&&n.y>.5&&n.y<1.3;t||i?(e.layers.set(0),console.log("Keeping arm visible in first-person:",e.name||"unnamed mesh")):e.layers.set(1)}}),this.fpCamera.layers.set(0),console.log("First-person camera setup complete"),this.isFirstPerson&&this.game&&typeof this.game.setActiveCamera=="function"&&(console.log("Setting first-person camera as active after setup"),this.game.setActiveCamera(this.fpCamera),this.createFirstPersonVisuals())}handleMouseDown(e){super.handleMouseDown(e),this.isFirstPerson&&this.weapon&&e.button===0&&this.startFiring()}handleMouseUp(e){super.handleMouseUp(e),this.isFirstPerson&&this.weapon&&e.button===0&&this.stopFiring()}startFiring(){this.weapon&&(this.isFiring=!0,this.weapon.startFire(),console.log("Started firing weapon"))}stopFiring(){this.weapon&&(this.isFiring=!1,this.weapon.stopFire(),console.log("Stopped firing weapon"))}update(e){if(!this.model||!this.isActive){console.warn("HumanPlayer update: model not initialized or player not active");return}super.update(e);const t=this.controls?this.controls.getInput():null;t&&t.firstPersonMode!==this.isFirstPerson&&(console.log("View mode change detected in input, toggling view"),this.toggleViewMode(t.firstPersonMode)),this.isFirstPerson?this.fpCamera&&t&&this.updateFirstPersonCamera(t.lookDirection):this.updateCameraPosition(),this.weapon&&this.weapon.update(e)}updateFirstPersonCamera(e){if(!this.fpCamera||!this.isActive){console.warn("Cannot update first-person camera: fpCamera is null or player not active");return}if(!e){console.warn("Cannot update first-person camera: lookDirection is null");return}const t=new bn(e.y,e.x,0,"YXZ");this.fpCamera.rotation.copy(t),this.model&&(this.model.rotation.y=e.x)}toggleViewMode(e){this.isFirstPerson===e||!this.isActive||(this.isFirstPerson=e,console.log("Toggling view mode to:",e?"first-person":"third-person"),this.controls&&typeof this.controls.updateViewMode=="function"&&this.controls.updateViewMode(this.isFirstPerson),this.isFirstPerson?this.weapon?this.weapon&&(this.weapon.attachToPlayer(),this.fpVisuals&&this.fpCamera&&(console.log("Removing placeholder visuals since proper weapon exists"),this.fpCamera.remove(this.fpVisuals),this.fpVisuals=null)):this.initWeapon():this.isFiring&&this.stopFiring(),this.isFirstPerson?(this.fpCamera?(this.fpCamera.parent!==this.model&&this.model&&(this.fpCamera.parent&&this.fpCamera.parent.remove(this.fpCamera),this.model.add(this.fpCamera),console.log("Reattached camera to model")),this.fpCamera.position.set(0,this.eyeHeight,0),this.fpCamera.rotation.set(0,0,0),this.fpCamera.updateMatrixWorld(!0),this.fpCamera.layers.set(0),this.game&&typeof this.game.setActiveCamera=="function"&&(this.game.setActiveCamera(this.fpCamera),console.log("Switched to first-person camera"),console.log("FP Camera position:",this.fpCamera.position),console.log("FP Camera rotation:",this.fpCamera.rotation),console.log("FP Camera parent:",this.fpCamera.parent?this.fpCamera.parent.uuid:"none"))):this.setupFirstPersonCamera(),this.model&&this.model.traverse(t=>{t.isMesh&&t.layers.set(1)})):(this.game.camera&&(this.game.setActiveCamera(this.game.camera),console.log("Switched to third-person camera")),this.model&&this.model.traverse(t=>{t.isMesh&&t.layers.set(0)})))}adjustCameraDistance(e){this.isFirstPerson||!this.isActive||(this.thirdPersonDistance+=e*.5,this.thirdPersonDistance=Math.max(2,Math.min(10,this.thirdPersonDistance)))}updateCameraPosition(){if(!this.model||this.isFirstPerson||!this.isActive)return;const e=this.controls?this.controls.cameraOrbit:{cameraAngle:0,cameraAngleY:0},t=new w(Math.sin(e.cameraAngle)*this.thirdPersonDistance,this.thirdPersonHeight+Math.sin(e.cameraAngleY)*this.thirdPersonDistance,Math.cos(e.cameraAngle)*this.thirdPersonDistance);this.camera.position.copy(this.model.position).add(t),this.cameraTarget.copy(this.model.position).add(new w(0,this.eyeHeight,0)),this.camera.lookAt(this.cameraTarget)}onInstructionsDismissed(){super.onInstructionsDismissed(),this.isFirstPerson&&this.isActive&&(console.log("Reinitializing first-person camera after instructions dismissed"),this.fpCamera||this.setupFirstPersonCamera(),this.toggleViewMode(!0),setTimeout(()=>{this.isActive&&this.isFirstPerson&&this.fpCamera&&this.game&&(console.log("Ensuring first-person camera is active after delay"),this.game.setActiveCamera(this.fpCamera))},50))}cleanup(){console.log("HumanPlayer cleanup"),this.isActive=!1,this.fpCamera&&(this.fpCamera.parent&&this.fpCamera.parent.remove(this.fpCamera),this.fpCamera=null),this.weapon&&(this.weapon.cleanup(),this.weapon=null),super.cleanup()}createFirstPersonVisuals(){if(!this.isFirstPerson||!this.fpCamera||this.fpVisuals)return;if(this.weapon){console.log("Skipping placeholder visuals since proper weapon exists");return}const e=new dn(.1,.1,.5),t=new xt({color:8947848});this.fpVisuals=new Ae(e,t),this.fpVisuals.position.set(.2,-.2,-.5),this.fpCamera.add(this.fpVisuals),console.log("Added first-person visuals")}removeFirstPersonVisuals(){this.fpVisuals&&this.fpCamera&&(this.fpCamera.remove(this.fpVisuals),this.fpVisuals=null,console.log("Removed first-person visuals"))}getActionState(){const e={};return this.weapon&&(e.fire=this.isFiring?"start":"stop"),e.viewMode=this.isFirstPerson?"firstPerson":"thirdPerson",e}processNetworkActions(e){if(super.processNetworkActions(e),e.fire&&this.weapon&&(e.fire==="start"&&!this.isFiring?(this.isFiring=!0,this.weapon.startFire()):e.fire==="stop"&&this.isFiring&&(this.isFiring=!1,this.weapon.stopFire())),e.viewMode){const t=e.viewMode==="firstPerson";t!==this.isFirstPerson&&this.toggleViewMode(t)}}}class xp{constructor(e){this.scene=e,this.entities=[]}addEntity(e){this.entities.push(e),e.mesh&&this.scene.add(e.mesh)}removeEntity(e){const t=this.entities.indexOf(e);t!==-1&&(this.entities.splice(t,1),e.mesh&&this.scene.remove(e.mesh))}update(e){for(const t of this.entities)t.update&&t.update(e)}}class vp{constructor(){this.gravity=9.8,this.timestep=1/60,this.shadowDarkness=.98,this.shadowSharpness=.98}checkCollision(e,t){var l,c;const n=e.position||((l=e.mesh)==null?void 0:l.position),i=t.position||((c=t.mesh)==null?void 0:c.position);if(!n||!i)return!1;const s=e.radius||.5,r=t.radius||.5;return n.distanceTo(i)<s+r}calculateArcTrajectory(e,t,n){const i=[],s=e.clone(),r=t.clone();for(let o=0;o<n&&(r.y-=this.gravity*this.timestep,s.add(r.clone().multiplyScalar(this.timestep)),i.push(s.clone()),!(s.y<=0));o++);return i}calculateBounce(e,t,n=.8){if(!e||!t)return null;const i=e.clone().normalize(),s=t.clone().normalize(),r=i.dot(s);return i.sub(s.multiplyScalar(2*r)).multiplyScalar(n)}configureShadowsForContrast(e){if(!(!e||!e.castShadow)){if(e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.bias=-5e-4,e.shadow.normalBias=.02,e.shadow.hasOwnProperty("darkness")&&(e.shadow.darkness=this.shadowDarkness),e.shadow.hasOwnProperty("radius")&&(e.shadow.radius=1-this.shadowSharpness),e.isDirectionalLight){const t=e.shadow.camera;t.near=.5,t.far=100;const n=30;t.left=-30,t.right=n,t.top=n,t.bottom=-30,t.updateProjectionMatrix()}else e.isSpotLight?(e.shadow.camera.near=.5,e.shadow.camera.far=100,e.shadow.camera.fov=30,e.shadow.camera.updateProjectionMatrix()):e.isPointLight&&(e.shadow.camera.near=.5,e.shadow.camera.far=50,e.shadow.camera.updateProjectionMatrix());return e}}enhanceMaterialForShadows(e){if(e)return e.needsUpdate=!0,e.type==="MeshStandardMaterial"||e.type==="MeshPhysicalMaterial"?(e.roughness<.7&&(e.roughness=Math.min(e.roughness*1.2,.95)),e.metalness>.2&&(e.metalness=Math.max(e.metalness*.8,.05)),e.hasOwnProperty("shadowSide")&&(e.shadowSide=0)):(e.type==="MeshLambertMaterial"||e.type==="MeshPhongMaterial")&&e.shininess&&(e.shininess=Math.max(e.shininess*.8,5)),e.receiveShadow=!0,e}applyContrastEnhancedShadows(e){e&&e.traverse(t=>{t.isLight&&t.castShadow&&this.configureShadowsForContrast(t),t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0,t.material&&(Array.isArray(t.material)?t.material.forEach(n=>this.enhanceMaterialForShadows(n)):this.enhanceMaterialForShadows(t.material)))})}}class Mp{constructor(e){this.scene=e,this.entities=new xp(e),this.physics=new vp,this.init()}init(){this.addLights(),this.createGround(),this.createHills(),this.addStars(),this.createTallObjects(),this.physics.applyContrastEnhancedShadows(this.scene)}addLights(){const e=new gf(263176,.03);this.scene.add(e),this.moonLight=new Jo(11189247,1.6),this.moonLight.position.set(15,30,20),this.moonLight.castShadow=!0,this.moonLight.shadow.mapSize.width=2048,this.moonLight.shadow.mapSize.height=2048,this.moonLight.shadow.camera.near=.5,this.moonLight.shadow.camera.far=100,this.moonLight.shadow.camera.left=-30,this.moonLight.shadow.camera.right=30,this.moonLight.shadow.camera.top=30,this.moonLight.shadow.camera.bottom=-30,this.moonLight.shadow.bias=-5e-4,this.moonLight.shadow.normalBias=.02,this.moonLight.shadow.darkness=.95,this.scene.add(this.moonLight);const t=new Gn(3359914,.1,50);t.position.set(-10,5,-10),this.scene.add(t),this.createMoon()}createMoon(){const e=new en(3,16,16),t=new xt({color:16777215,emissive:11184895,emissiveIntensity:.4});this.moon=new Ae(e,t);const n=80;this.moon.position.set(this.moonLight.position.x*(n/this.moonLight.position.length()),this.moonLight.position.y*(n/this.moonLight.position.length()),this.moonLight.position.z*(n/this.moonLight.position.length()));const i=new en(4,16,16),s=new xt({color:11189247,transparent:!0,opacity:.25,side:1}),r=new Ae(i,s);this.moon.add(r),this.scene.add(this.moon)}createGround(){const n=new Cf(100,100,526344,131586);n.position.y=.01,this.scene.add(n);const i=new Zi(100,100),s=new ct({color:658962,roughness:.95,metalness:.15,transparent:!0,opacity:.9,receiveShadow:!0}),r=new Ae(i,s);r.rotation.x=-Math.PI/2,r.position.y=0,r.receiveShadow=!0,r.name="ground",r.userData.isTerrainCollider=!0,this.scene.add(r)}createHills(){const e=[1122867,2241348,3359829];for(let t=0;t<12;t++){const n=(Math.random()-.5)*80,i=(Math.random()-.5)*80,s=Math.random()*10+5,r=Math.random()*4+1,o=Math.floor(Math.random()*3)+3,l=1,c=new Mi(s,r,o,l,!0),h=Math.floor(Math.random()*e.length),u=new ct({color:e[h],flatShading:!0,roughness:.9,metalness:.05}),d=new Ae(c,u);d.position.set(n,r/2,i),d.rotation.y=Math.random()*Math.PI,d.castShadow=!0,d.receiveShadow=!0,d.name=`hill_${t}`,d.userData.isTerrainCollider=!0,this.scene.add(d)}}addStars(){const e=new Je,t=new vi({color:16777215,size:.15,sizeAttenuation:!0}),n=[],i=[];for(let r=0;r<4e3;r++){const o=(Math.random()-.5)*200,l=Math.random()*100+10,c=(Math.random()-.5)*200;n.push(o,l,c),Math.random()>.8?i.push(.8,.9,1):Math.random()>.7?i.push(1,.8,.8):i.push(1,1,1)}e.setAttribute("position",new Ge(n,3)),e.setAttribute("color",new Ge(i,3)),t.vertexColors=!0;const s=new fi(e,t);this.scene.add(s)}createTallObjects(){for(let e=0;e<6;e++){const t=(Math.random()-.5)*60,n=(Math.random()-.5)*60,i=5+Math.random()*3,s=.3+Math.random()*.2,r=new qn(s,s*1.2,i,8),o=new ct({color:4465152,roughness:.95,metalness:.05}),l=new Ae(r,o);l.position.set(t,i/2,n),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l);const c=i*1.5,h=i*.7,u=new Mi(h,c,8),d=new ct({color:1127185,roughness:.9,metalness:.05}),f=new Ae(u,d);f.position.set(t,i+c/2,n),f.castShadow=!0,f.receiveShadow=!0,this.scene.add(f)}for(let e=0;e<3;e++){const t=(Math.random()-.5)*40,n=(Math.random()-.5)*40,i=1+Math.random()*2,s=8+Math.random()*7,r=1+Math.random()*2,o=new dn(i,s,r),l=new ct({color:6710903,roughness:.75,metalness:.25}),c=new Ae(o,l);c.position.set(t,s/2,n),c.rotation.y=Math.random()*Math.PI,c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c)}for(let e=0;e<8;e++){const t=(Math.random()-.5)*50,n=(Math.random()-.5)*50,i=.5+Math.random()*1.5,s=new ar(i,0),r=new ct({color:2236962,flatShading:!0,roughness:.95,metalness:.05}),o=new Ae(s,r);o.position.set(t,i*.5,n),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),o.castShadow=!0,o.receiveShadow=!0,this.scene.add(o)}}update(e){if(this.entities.update(e),this.moon&&this.moonLight){const t=.05*e;this.moon.position.applyAxisAngle(new w(0,1,0),t);const n=new w().copy(this.moon.position).normalize();this.moonLight.position.copy(n.multiplyScalar(40))}}}class wp{constructor(){this.socket=null,this.isConnected=!1,this.players=new Map,this.roomId=null,this.clientId=null,this.serverUrl=null,this.onConnect=()=>{},this.onDisconnect=()=>{},this.onPlayerJoin=()=>{},this.onPlayerLeave=()=>{},this.onPlayerUpdate=()=>{},this.onGameStateUpdate=()=>{},this.isMockMode=!0,this.mockPlayers=new Map,this.isReconnecting=!1,this.reconnectAttempts=0,this.reconnectMaxAttempts=5,this.reconnectDelay=2e3}connect(e,t,n={}){if(this.serverUrl=e,this.roomId=t,this.onConnect=n.onConnect||(()=>{}),this.onDisconnect=n.onDisconnect||(()=>{}),this.onPlayerJoin=n.onPlayerJoin||(()=>{}),this.onPlayerLeave=n.onPlayerLeave||(()=>{}),this.onPlayerUpdate=n.onPlayerUpdate||(()=>{}),this.onGameStateUpdate=n.onGameStateUpdate||(()=>{}),this.isMockMode){this.isConnected=!0,this.clientId=`client_${Math.floor(Math.random()*1e4)}`,console.log(`[Networking] Mock connection successful. Client ID: ${this.clientId}`),this.onConnect();return}try{this.socket=new WebSocket(e),this.setupSocketEvents(),console.log(`[Networking] Connecting to ${e} (room: ${t})`)}catch(i){console.error(`[Networking] Connection error: ${i.message}`),this.scheduleReconnect()}}setupSocketEvents(){this.isMockMode||!this.socket||(this.socket.onopen=()=>{this.isConnected=!0,this.reconnectAttempts=0,this.joinRoom(this.roomId),this.onConnect(),console.log("[Networking] WebSocket connection established")},this.socket.onclose=e=>{this.isConnected=!1,console.log(`[Networking] WebSocket connection closed: ${e.code} ${e.reason}`),this.onDisconnect(),e.code!==1e3&&e.code!==1001&&this.scheduleReconnect()},this.socket.onmessage=e=>{try{const t=JSON.parse(e.data);this.handleMessage(t)}catch(t){console.error("[Networking] Error handling message:",t)}},this.socket.onerror=e=>{console.error("[Networking] WebSocket error:",e)})}scheduleReconnect(){this.isReconnecting||this.reconnectAttempts>=this.reconnectMaxAttempts||(this.isReconnecting=!0,this.reconnectAttempts++,console.log(`[Networking] Reconnecting in ${this.reconnectDelay}ms (attempt ${this.reconnectAttempts}/${this.reconnectMaxAttempts})`),setTimeout(()=>{this.isReconnecting=!1,this.connect(this.serverUrl,this.roomId,{onConnect:this.onConnect,onDisconnect:this.onDisconnect,onPlayerJoin:this.onPlayerJoin,onPlayerLeave:this.onPlayerLeave,onPlayerUpdate:this.onPlayerUpdate,onGameStateUpdate:this.onGameStateUpdate})},this.reconnectDelay))}joinRoom(e){if(this.isConnected){if(this.isMockMode){console.log(`[Networking] Mock joining room: ${e}`);return}this.send({type:"join_room",roomId:e,clientId:this.clientId})}}handleMessage(e){switch(e.type){case"client_id":this.clientId=e.clientId,console.log(`[Networking] Received client ID: ${this.clientId}`);break;case"player_join":this.players.set(e.playerId,e.playerData),this.onPlayerJoin(e.playerId,e.playerData),console.log(`[Networking] Player joined: ${e.playerId}`);break;case"player_leave":this.players.delete(e.playerId),this.onPlayerLeave(e.playerId),console.log(`[Networking] Player left: ${e.playerId}`);break;case"player_update":this.players.set(e.playerId,e.playerData),this.onPlayerUpdate(e.playerId,e.playerData);break;case"game_state":this.onGameStateUpdate(e.state),console.log("[Networking] Game state updated");break;default:console.warn("[Networking] Unknown message type:",e.type)}}send(e){if(this.isMockMode){this.handleMockSend(e);return}if(!(!this.isConnected||!this.socket))try{this.socket.send(JSON.stringify(e))}catch(t){console.error("[Networking] Error sending data:",t)}}handleMockSend(e){if(e.type==="player_update"){const t={...e.playerState,lastUpdate:Date.now()};this.mockPlayers.set(e.playerState.id,t),this.onPlayerUpdate(e.playerState.id,t)}}updatePlayerState(e){this.send({type:"player_update",roomId:this.roomId,clientId:this.clientId,playerState:e})}disconnect(){if(this.isMockMode){this.isConnected=!1,this.players.clear(),this.mockPlayers.clear(),this.onDisconnect(),console.log("[Networking] Mock disconnect");return}if(this.socket){try{this.socket.close(1e3,"Client disconnected")}catch(e){console.error("[Networking] Error during disconnect:",e)}this.socket=null}this.isConnected=!1,this.players.clear()}mockPlayerJoin(e,t){if(!this.isMockMode)return;const n={type:"player_join",playerId:e,playerData:t};this.handleMessage(n)}mockPlayerLeave(e){if(!this.isMockMode)return;const t={type:"player_leave",playerId:e};this.handleMessage(t)}}class Sp{constructor(e){console.log("Game: Constructor called with containerId:",e),this.containerId=e,this.scene=null,this.camera=null,this.renderer=null,this.clock=new _f,this.world=null,this.player=null,this.players=[],this.inputManager=null,this.assetLoader=null,this.container=null,this.networking=null,this.isMultiplayerEnabled=!1,this.isGodMode=!0,this.localPlayerId=null,this.gameMode="third_person",console.log("Game: Initial game mode:",this.gameMode),this._isTogglingMode=!1,this.init()}init(){console.log("Game: Starting initialization");const e=document.getElementById(this.containerId);if(!e){console.error(`Container with ID '${this.containerId}' not found`);return}this.container=e,e.style.backgroundColor="#050520",this.setupRenderer(e);try{console.log("Game: Creating AssetLoader"),this.assetLoader=new op,console.log("Game: Creating World"),this.world=new Mp(this.scene),this.networking=new wp,this.setupInputManager(e),window.addEventListener("resize",()=>this.handleResize()),document.addEventListener("fullscreenchange",()=>this.handleResize()),this.handleResize(),this.animate()}catch(t){console.error("Error initializing game:",t)}}setupRenderer(e){this.scene=new Cd,this.scene.background=new ye(328992),this.camera=new lt(75,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(0,5,5),this.renderer=new Qs({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=3001,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),console.log("[DEBUG] Renderer initialized with shadows:",this.renderer.shadowMap.enabled),e.appendChild(this.renderer.domElement)}setupInputManager(e){this.inputManager=new ap(this,e),this.inputManager.addInstructions(e),this.createNewPlayer()}createPlayer(){this.createNewPlayer()}createNewPlayer(e={}){console.log("Game: Creating new player with options:",e);const n={...{team:this.gameMode==="first_person"?"merc":"jackalope",id:`player_${this.players.length+1}`,isLocal:!0,isActive:this.players.length===0},...e},i=n.team==="merc";if(i?this.gameMode="first_person":this.gameMode="third_person",console.log("Game: Creating player with team:",n.team,"isFirstPerson:",i),!this.assetLoader)return console.error("Game: AssetLoader not initialized!"),null;let s=null;try{return n.team==="merc"?(console.log("Game: Creating Merc (Human) player"),s=new _p(this,{isFirstPerson:!0,physics:{gravity:9.8},movement:{movementSpeed:5},controls:{sensitivity:.002,invertY:!1,firstPersonMode:!0}}),console.log("Game: Human player created")):(console.log("Game: Creating Jackalope (Bunny) player"),s=new up(this,{physics:{gravity:7.5},movement:{movementSpeed:7},controls:{sensitivity:.0025}}),console.log("Game: Bunny player created")),s.id=n.id,s.team=n.team,s.isLocal=n.isLocal,s.physics&&typeof s.physics.setScene=="function"&&(console.log("Game: Setting up player physics"),s.physics.setScene(this.scene)),this.players.push(s),console.log(`Game: Added player to players array. Count: ${this.players.length}`),n.isLocal&&(this.localPlayerId=s.id),(n.isActive||this.players.length===1)&&this.setActivePlayer(s),this.inputManager&&this.inputManager.instructions&&this.inputManager.instructions.style.display==="none"&&s.isLocal&&(console.log("Game: Auto-initializing player controls"),s.onInstructionsDismissed()),s}catch(r){return console.error("Error creating player:",r),null}}setActivePlayer(e){let t=e;if(typeof e=="string"&&(t=this.players.find(n=>n.id===e),!t)){console.error(`Game: Player with ID ${e} not found`);return}this.player=t,console.log("Game: Set active player to:",this.player.id,"team:",this.player.team),this.gameMode=this.player.team==="merc"?"first_person":"third_person",this.gameMode==="first_person"&&this.player.fpCamera?(console.log("Game: Setting first-person camera as active"),this.setActiveCamera(this.player.fpCamera)):(console.log("Game: Setting third-person camera as active"),this.setActiveCamera(this.player.camera)),this.inputManager&&(this.inputManager.isFirstPerson=this.gameMode==="first_person")}getPlayerById(e){return this.players.find(t=>t.id===e)||null}removePlayer(e){const t=this.players.findIndex(i=>i.id===e);if(t===-1){console.error(`Game: Player with ID ${e} not found`);return}const n=this.players[t];n.cleanup(),this.players.splice(t,1),console.log(`Game: Removed player ${e}. Remaining: ${this.players.length}`),this.player===n&&this.players.length>0&&this.setActivePlayer(this.players[0])}cycleToNextPlayer(){if(console.log("%c 🔄 ATTEMPTING TO CYCLE TO NEXT PLAYER - isGodMode:","color: #9900ff; font-size: 14px;",this.isGodMode),!this.isGodMode)return console.log("%c ❌ God Mode is disabled, cannot cycle players","color: red"),this.gameMode;if(this.players.length===0)return console.log("%c ❌ No players to cycle through","color: red"),this.gameMode;const e=this.players.indexOf(this.player);console.log(`Current player index: ${e}, Total players: ${this.players.length}`);const t=(e+1)%this.players.length;return this.setActivePlayer(this.players[t]),console.log(`%c 🎮 Cycled to player ${this.player.id}, team: ${this.player.team}`,"color: #00ff00"),this.gameMode}switchPlayerMode(){if(this.isGodMode&&this.players.length>1)return this.cycleToNextPlayer();const e=this.gameMode,t=this.gameMode==="first_person"?"third_person":"first_person";return this.gameMode=t,console.log(`Switching player mode from ${e} to ${this.gameMode}`),this._isTogglingMode?(console.warn("Already toggling mode, ignoring redundant request"),this.gameMode):(this._isTogglingMode=!0,this.player?(document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),setTimeout(()=>{this.player.cleanup();const n={team:this.gameMode==="first_person"?"merc":"jackalope",id:this.player.id,isLocal:!0,isActive:!0};this.createNewPlayer(n),this.player&&this.player.physics&&typeof this.player.physics.setScene=="function"&&this.player.physics.setScene(this.scene),this.gameMode==="first_person"&&this.player&&setTimeout(()=>{this.container&&document.pointerLockElement!==this.container&&(console.log("Requesting pointer lock after switching to first-person mode"),this.container.requestPointerLock())},100),this.inputManager&&(this.inputManager.isFirstPerson=this.gameMode==="first_person"),setTimeout(()=>{this._isTogglingMode=!1},500)},50)):(this.createNewPlayer(),setTimeout(()=>{this._isTogglingMode=!1},500)),this.gameMode)}handleResize(){if(!this.container||!this.camera||!this.renderer)return;const e=this.container.clientWidth,t=this.container.clientHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.players.forEach(n=>{n.camera&&(n.camera.aspect=e/t,n.camera.updateProjectionMatrix()),n.fpCamera&&(n.fpCamera.aspect=e/t,n.fpCamera.updateProjectionMatrix())}),console.log("Resized renderer and camera:",e,"x",t)}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta();this.world&&this.world.update(e),this.players.forEach(t=>{const n=t===this.player&&t.isLocal;t.update(e,n)}),this.scene&&this.camera&&this.renderer&&this.renderer.render(this.scene,this.camera)}setActiveCamera(e){if(!e){console.error("setActiveCamera: camera is null or undefined");return}console.log("Setting active camera:",e.type,e.uuid),this.camera=e,this.container?(e.aspect=this.container.clientWidth/this.container.clientHeight,e.updateProjectionMatrix(),console.log("Updated camera aspect ratio:",e.aspect)):console.warn("Cannot update camera aspect ratio: container is null")}addPlayerInfoOverlay(){this.playerInfoOverlay||(this.playerInfoOverlay=document.createElement("div"),this.playerInfoOverlay.style.position="absolute",this.playerInfoOverlay.style.top="10px",this.playerInfoOverlay.style.left="10px",this.playerInfoOverlay.style.backgroundColor="rgba(0, 0, 0, 0.7)",this.playerInfoOverlay.style.color="white",this.playerInfoOverlay.style.padding="10px",this.playerInfoOverlay.style.fontFamily="monospace",this.playerInfoOverlay.style.fontSize="12px",this.playerInfoOverlay.style.zIndex="1000",this.playerInfoOverlay.style.borderRadius="5px",this.container.appendChild(this.playerInfoOverlay));const e=`
            <div><strong>God Mode:</strong> ${this.isGodMode?"ON":"OFF"}</div>
            <div><strong>Players (${this.players.length}):</strong></div>
            ${this.players.map(t=>{const n=t===this.player;return`<div style="${n?"color: yellow;":""}">
                    ${n?"► ":""}
                    ${t.id} (${t.team}) ${t.isLocal?"[LOCAL]":"[REMOTE]"}
                </div>`}).join("")}
        `;this.playerInfoOverlay.innerHTML=e}toggleGodMode(){return this.isGodMode=!this.isGodMode,console.log(`%c 🔮 God Mode ${this.isGodMode?"ENABLED":"DISABLED"}`,"background: purple; color: white; font-size: 14px; padding: 5px;"),this.addPlayerInfoOverlay(),this.isGodMode}}const ra="multiplayer-v1-MASON";console.log(`%c 🎮 JACKALOPE PLANET: ${ra} LOADED 🎮`,"background: #222; color: #bada55; font-size: 16px; padding: 10px;");console.log("%c 🚀 MULTIPLAYER EDITION ACTIVE - CONTROLS:","color: #ff6700; font-size: 14px;");console.log("%c ⌨️  G: Toggle God Mode | 1: Spawn Jackalope | 2: Spawn Merc | T: Switch Players","color: #00a2ff; font-size: 12px;");window.testJackalope={version:ra,games:[],runTests:function(){var t;console.group("Jackalope Planet Tests"),console.log("Testing version:",this.version);const a=document.querySelectorAll(".jackalope-planet-canvas-container");console.log("Game instances found:",a.length);const e=window.currentMode||"unknown";if(console.log("Current mode:",e),a.forEach(n=>{n.querySelector("canvas")?console.log("Renderer active:",n.id):console.warn("No renderer found in:",n.id)}),this.version.includes("multiplayer")){console.log("Testing multiplayer features...");const n=this.games[0];n&&(console.log("God Mode active:",n.isGodMode),console.log("Player count:",n.players.length),console.log("Active player:",(t=n.player)==null?void 0:t.id),console.log("Players:",n.players.map(i=>`${i.id} (${i.team})`)))}return console.groupEnd(),"Tests complete - check console for results"},spawnPlayer:function(a){if(!this.games||!this.games[0]){console.error("No game instance found");return}const e=this.games[0];if(e.createNewPlayer&&e.isGodMode){const t=e.players.filter(s=>s.team===a).length,n={x:(Math.random()-.5)*10,y:0,z:(Math.random()-.5)*10},i=e.createNewPlayer({team:a,id:`${a}_${t+1}`,isLocal:!1,isActive:!1});return i&&i.model&&(i.model.position.set(i.model.position.x+n.x,i.model.position.y+n.y,i.model.position.z+n.z),i.position.copy(i.model.position)),e.addPlayerInfoOverlay(),console.log(`Spawned ${a} player. Total players: ${e.players.length}`),i}else return console.error("Cannot spawn player - God Mode is disabled or createNewPlayer not available"),null},toggleGodMode:function(){if(!this.games||!this.games[0]){console.error("No game instance found");return}const a=this.games[0];return a.toggleGodMode?(a.toggleGodMode(),console.log("God Mode:",a.isGodMode?"ON":"OFF"),a.isGodMode):!1}};document.addEventListener("DOMContentLoaded",()=>{console.log("MULTIPLAYER: Jackalope Planet initializing");const a=document.querySelectorAll(".jackalope-planet-canvas-container");console.log(`Found ${a.length} jackalope-planet containers`);const e=[];a.forEach(i=>{const s=i.getAttribute("id");if(s){console.log(`Initializing game in container: ${s}`);const r=new Sp(s);e.push(r),window.testJackalope.games.push(r),bp(r);const o=document.createElement("div");o.className="first-person-cursor",o.id=`${s}-fp-cursor`,o.style.position="fixed",o.style.top="50%",o.style.left="50%",o.style.width="4px",o.style.height="4px",o.style.backgroundColor="rgba(255,255,255,0.8)",o.style.borderRadius="50%",o.style.transform="translate(-50%, -50%)",o.style.zIndex="9999",o.style.pointerEvents="none",o.style.display="none",document.body.appendChild(o),r.addPlayerInfoOverlay()}else console.error("Container without ID found, skipping")});let t=!1,n="third_person";a.forEach(i=>{const s=document.createElement("div");s.className="jackalope-controls-info",s.innerHTML=`
            <div>Press <strong>T</strong> to toggle players</div>
            <div>Press <strong>G</strong> to toggle God Mode</div>
            <div>Press <strong>1</strong> to spawn Jackalope (in God Mode)</div>
            <div>Press <strong>2</strong> to spawn Merc (in God Mode)</div>
            <div>Press <strong>P</strong> to show player info</div>
        `,s.style.position="absolute",s.style.bottom="10px",s.style.left="10px",s.style.color="white",s.style.backgroundColor="rgba(0,0,0,0.5)",s.style.padding="5px 10px",s.style.borderRadius="4px",s.style.fontSize="14px",s.style.zIndex="10",i.appendChild(s)}),window.addEventListener("keydown",i=>{(i.key==="t"||i.key==="T")&&!t?(console.log("Global T key pressed, switching player mode"),t=!0,document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),setTimeout(()=>{e.forEach(s=>{if(typeof s.switchPlayerMode=="function"){const r=s.switchPlayerMode();console.log(`Game switched to ${r} mode`),n=s.gameMode}}),document.querySelectorAll(".first-person-cursor").forEach(s=>{s.style.display=n==="first_person"?"block":"none"}),setTimeout(()=>{t=!1},1e3)},100)):(i.key==="g"||i.key==="G")&&!t?(t=!0,e.forEach(s=>{typeof s.toggleGodMode=="function"&&s.toggleGodMode()}),setTimeout(()=>{t=!1},500)):i.key==="1"&&!t?(t=!0,e.forEach(s=>{s.isGodMode&&s.inputManager&&s.inputManager.spawnPlayerForTeam("jackalope")}),setTimeout(()=>{t=!1},500)):i.key==="2"&&!t?(t=!0,e.forEach(s=>{s.isGodMode&&s.inputManager&&s.inputManager.spawnPlayerForTeam("merc")}),setTimeout(()=>{t=!1},500)):(i.key==="p"||i.key==="P")&&!t&&(t=!0,e.forEach(s=>{s.addPlayerInfoOverlay()}),setTimeout(()=>{t=!1},500))}),document.addEventListener("pointerlockchange",()=>{const i=!!document.pointerLockElement,s=n==="first_person";document.querySelectorAll(".first-person-cursor").forEach(r=>{r.style.display=i&&s?"block":"none"})})});function bp(a){if(!a||!a.networking){console.error("Cannot initialize networking: game or networking component not available");return}const e="wss://localhost:8080",t="jackalope-game-1",n={onConnect:()=>{console.log("Connected to game server"),a.isMultiplayerEnabled=!0},onDisconnect:()=>{console.log("Disconnected from game server"),a.isMultiplayerEnabled=!1},onPlayerJoin:(i,s)=>{if(console.log(`Player ${i} joined (team: ${s.team})`),a.getPlayerById(i)){console.log(`Player ${i} already exists, skipping creation`);return}a.createNewPlayer({id:i,team:s.team,isLocal:!1,isActive:!1}),a.addPlayerInfoOverlay()},onPlayerLeave:i=>{console.log(`Player ${i} left`),a.removePlayer(i),a.addPlayerInfoOverlay()},onPlayerUpdate:(i,s)=>{const r=a.getPlayerById(i);r&&r.setNetworkState&&r.setNetworkState(s)}};a.networking.connect(e,t,n),console.log("Networking initialized in mock mode")}
