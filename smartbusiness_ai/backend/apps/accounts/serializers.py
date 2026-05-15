from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['business_name', 'role', 'phone', 'city']

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'profile']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    business_name = serializers.CharField(write_only=True, required=False, default='SmartBusiness AI')
    role = serializers.CharField(write_only=True, required=False, default='admin')

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name', 'business_name', 'role']

    def create(self, validated_data):
        business_name = validated_data.pop('business_name', 'SmartBusiness AI')
        role = validated_data.pop('role', 'admin')
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        UserProfile.objects.create(user=user, business_name=business_name, role=role)
        return user

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        profile, _ = UserProfile.objects.get_or_create(user=self.user)
        data['user'] = {
            'id': self.user.id,
            'username': self.user.username,
            'email': self.user.email,
            'first_name': self.user.first_name,
            'last_name': self.user.last_name,
            'business_name': profile.business_name,
            'role': profile.role,
        }
        return data
