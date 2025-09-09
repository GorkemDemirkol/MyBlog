var string =" muratın trlrfon numarası 5415341646 muratın yaşı 25 tir"
string += "osmanın telefonu 565654747 osmanın yaşı 32 dir"

var regexp= /\d+/g;
document.write(string.replace(regexp, " XXXXXXXX "))