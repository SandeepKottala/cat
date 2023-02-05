function calctotal(){
    var total=0;
    var item=document.getElementsByTagName('input');
    for(var i=0;i<item.length;i++)
    {
        if(item[i].checked)
        {
            total=total+item[i].value;
        }
    }





}