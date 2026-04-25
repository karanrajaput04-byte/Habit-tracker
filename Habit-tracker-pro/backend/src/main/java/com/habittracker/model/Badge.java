package com.habittracker.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "badges")
public class Badge {

    @Id
    private String id;
    private String userId;
    private String badgeName;
    private String earnedDate;

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getBadgeName() {
        return badgeName;
    }
    public void setBadgeName(String badgeName) {
        this.badgeName = badgeName;
    }
    public String getEarnedDate() {
        return earnedDate;
    }
    public void setEarnedDate(String earnedDate) {
        this.earnedDate = earnedDate;
    }
}
