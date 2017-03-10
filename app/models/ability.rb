class Ability
  include CanCan::Ability

  def initialize staff
    if staff.class == Staff
      if staff.admin?
        can :manage, :all
      elsif staff.owner?
        can :read, Staff
        can :manage, Order
      else
        cannot :access, :all
      end
    end
  end
end
