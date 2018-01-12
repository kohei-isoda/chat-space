$(document).on('turbolinks:load', function() {
  $(function() {
    var search_list = $("#user-search-result");
    function appendUser(user) {
      var a_user = `<div class="chat-group-user clearfix">
                      <p class="chat-group-user__name">${user.name}</p>
                      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                    </div>`
      search_list.append(a_user);
    }

    function addHTML(id, name) {
      var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                    <input name='group[user_ids][]' type='hidden' value='${id}'>
                    <p class='chat-group-user__name'>${name}</p>
                    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                  </div>`
        return html;
    }


    $("#user-search-field").on("keyup", function() {
      if ($("#user-search-field").val() != 0 || $("#user-search-field").val() != "") {
        var input = $("#user-search-field").val();
        $.ajax({
          url: '/users/',
          type: 'GET',
          data: { keyword: input },
          dataType: 'json'
        })
        .done(function(users) {
          console.log('OK');
          $("#user-search-result").empty();
            users.forEach(function(user){
              appendUser(user);
            });
        })
        .fail(function(){
          alert("検索NG")
        });
      };
    });


    $(".new_group").on('click', '.user-search-add', function() {
      var id   = $(this).data('user-id');
      var name = $(this).data('user-name');
      var html = addHTML(id, name);
      $('#chat-group-users').append(html);
      $(this).parent().remove();
    });


    $(".new_group").on('click', '.user-search-remove', function() {
      $(this).parent().remove();
    });

    $(".edit_group").on('click', '.user-search-add', function() {
      var id   = $(this).data('user-id');
      var name = $(this).data('user-name');
      var html = addHTML(id, name);
      $('#chat-group-users').append(html);
      $(this).parent().remove();
    });


    $(".edit_group").on('click', '.user-search-remove', function() {
      $(this).parent().remove();
    });


  });
});
