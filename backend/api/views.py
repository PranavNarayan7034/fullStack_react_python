from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def function1(request):
    return HttpResponse("Hello Welcome to Backend Api")

# def Createaccount(request):
#     return HttpResponse("Create Account intialized,,")

@csrf_exempt
def Createaccount(request):
    if request.method != "POST":
        return JsonResponse({'error':'only POST method allowed in signup'},status = 400)

    try:
        data = json.loads(request.body)
        print('data on backend ==' , data)
        # return JsonResponse({"message": f"Data got on backend : {data}"}, status = 200)

        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if len(username) < 1 :
            return JsonResponse({'error':"Invalid username"})
        if email == "":
            return JsonResponse({'error':"Invalid email"})
        if len(password) < 5:
            return JsonResponse({'error':"Please use password min 5 characters"})

        print("Data got in backend" , username, email, password)

        return JsonResponse({"message": f"Data got on backend : {data}"}, status = 200)
    
    except Exception as e:
        return JsonResponse({'error':f'error in signup backend : {str(e)}'},status = 500)