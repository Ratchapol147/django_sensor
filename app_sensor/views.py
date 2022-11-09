from django.shortcuts import render




def fertilizer(request):
        data = {'channel':'1684135'}
    
    
        return render(request,'fertilizer.html',{'data':data})


def Dashboardplant(request):

        data = {'AllChannel':True}

     

        return render(request,'Dashboardplant.html',{'data':data})
def plant1(request):
        data = {'channel':'1851537'}
    
    
        return render(request,'plant1.html',{'data':data})

def plant2(request):
        data = {'channel':'1852403'}

     

        return render(request,'plant2.html',{'data':data})


def plant3(request):

        data = {'channel':'1916183'}

     

        return render(request,'plant3.html',{'data':data})

def plant4(request):

        data = {'channel':'1916185'}

     

        return render(request,'plant4.html',{'data':data})

def plant5(request):

        data = {'channel':'1916187'}

     

        return render(request,'plant5.html',{'data':data})
