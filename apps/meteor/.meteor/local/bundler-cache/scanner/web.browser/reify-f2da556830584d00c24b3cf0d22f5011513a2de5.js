module.export({SHA256:()=>SHA256});let binb2hex;module.link('./binb2hex',{binb2hex(v){binb2hex=v}},0);let core;module.link('./core',{core(v){core=v}},1);let str2binb;module.link('./str2binb',{str2binb(v){str2binb=v}},2);let utf8Encode;module.link('./utf8Encode',{utf8Encode(v){utf8Encode=v}},3);



function SHA256(input) {
    input = utf8Encode(input);
    const chrsz = 8;
    return binb2hex(core(str2binb(input, chrsz), input.length * chrsz));
}
//# sourceMappingURL=sha256.js.map