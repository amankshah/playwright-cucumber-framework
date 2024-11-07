Feature: Google Search

  Scenario: Search for Playwright
    Given Navigating to google.com
    When Searching for "Playwright"
    Then getting the first search result
