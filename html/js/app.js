const postForm = document.getElementById("postForm");
    const posts = document.getElementById("posts");
    const postArray = []; //게시물을 저장하는 배열

    postForm.addEventListener("submit",function(event){
        event.preventDefault();
        const title = postForm.title.value;
        const content = postForm.content.value;
        const date = new Date();
        const post = {
            title,
            content,
            date,
            comments:[],
        };
        postArray.push(post); // 게시물을 배열에 추가합니다.

        //새 게시물을 담아줄 div 생성
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <p>게시일 :${date.toLocaleString()}</p>
        `;
        
        //삭제버튼 생성
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = "X";
        deleteButton.addEventListener("click",()=>{
            postArray.splice(postArray.indexOf(post),1);
            posts.removeChild(postDiv);
        });
        
        //댓글 폼 생성
        const commentForm = document.createElement("form");
        commentForm.innerHTML = `
            <input type="text" name="comment" placeholder="댓글추가하기">
            <button type="submit">게시</button>
        `;
        
        commentForm.addEventListener("submit",function(event){
           event.preventDefault();
           const commentText = commentForm.comment.value;
           const comment = {
                text : commentText,
                date : new Date(),
           };

           post.comments.push(comment);
           const commentDiv = document.createElement("Div");
           commentDiv.classList.add("comment");
           commentDiv.innerHTML = `
                <p>${commentText}</p>
                <p>게시일 : ${comment.date.toLocaleString()}</p>
           `;
           //댓글 입력 초기화
           commentForm.comment.value = "";
           postDiv.appendChild(commentDiv);

        });

        postDiv.appendChild(deleteButton);
        postDiv.appendChild(commentForm);
       
       
       
        //게시글 목록 추가
        posts.appendChild(postDiv);
        
        //게시글 입력 초기화
        postForm.title.value = "";
        postForm.contetn.value ="";








    })
    
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');

    const inputButton = document.getElementById('inputButton');

    function inputs(){
        if(titleInput.value.trim() !== ''  && contentInput.value.trim() !==''){

            inputButton.removeAttribute('disabled');
           
        }else{
            
            inputButton.setAttribute('disabled',true);
        }
    }
    

    titleInput.addEventListener('input',inputs);
    contentInput.addEventListener('input',inputs);

    const images = [
        './img/dog.jpg',
        './img/dog2.jpg',
        './img/dog3.jpg',
        './img/dog4.jpg',
        './img/dog5.jpg',
        './img/dog6.jpg',
        './img/dog7.jpg',
        './img/dog8.jpg',
        './img/dog9.jpg',
        './img/dog10.jpg',
    ];

    const imagesPerpage = 2;
    let currentPage = 0;

    const imageContainer = document.querySelector('.img-container');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    function displayImg(page){
        const startIndex = page * imagesPerpage;
        const endIndex = startIndex + imagesPerpage;
        const pageImages = images.slice(startIndex,endIndex);
        
        imageContainer.innerHTML = '';

        pageImages.forEach(images => {
            const imgElement = document.createElement('img');
            imgElement.src = images;
            imgElement.classList.add('image');
            imageContainer.appendChild(imgElement);
        });

    }

    function updateButtons(){
        prevButton.disabled = currentPage ===0;

        nextButton.disabled = (currentPage+1)* imagesPerpage >= images.length;
    }

    prevButton.addEventListener('click', () => {
        if(currentPage >0){
            currentPage --;
            displayImg(currentPage);
            updateButtons();
        }
    });

    nextButton.addEventListener('click',() => {
        if((currentPage +1)* imagesPerpage <images.length){
            currentPage ++;
            displayImg(currentPage);
            updateButtons();
        }
    });

    displayImg(currentPage);
    updateButtons();

    const audio = document.getElementById('myAudio');
    audio.play();
    audio.autoplay = true;
    

    document.getElementById("uploadButton").addEventListener("click",function(){
        var fileInput = document.getElementById("fileInput");
        var uploadImage = document.getElementById("uploadImage");
        var imageContainer = document.getElementById("imageContainer");

        if (fileInput.files.length > 0) {
            var file = fileInput.files[0];
            var reader = new FileReader();

            reader.onload = function(e) {
                uploadImage.src = e.target.result;
                imageContainer.style.display = "block";
            }
            reader.readAsDataURL(file);
        }else{
            alert("이미지 파일을 선택하세요.");
        }
    });


    const blogTextList = document.getElementById("blogTextList");
    const createTextButton = document.getElementById("createTextButton");
    let sevePosts = JSON.parse(localStorage.getItem("blogPost"))|| [];
    
    const itemPerPage = 5;
    let textCurrentPage = 1;

    sevePosts = savePosts.reverse();

    function displayPosts(page){
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const postsToDisplay = savePosts.slice(startIndex,endIndex);
        
        blogTextList.innerHTML = ' ';

        postsToDisplay.forEach(post =>{
            const listItem = document.createElement("li");
            listItem.textContent = post.content;
            blogTextList.appendChild(listItem);
        });

        document.getElementById("textCurrentPage").textContent=`페이지 ${page}`;
    }

    createTextButton.addEventListener("click",function(){
        window.location.href= "blog-post.html"
    });

        document.getElementById("textPrevPage").addEventListener("click",function(){
            if(textCurrentPage > 1){
                textCurrentPage --;
                displayPosts(textCurrentPage);
            }
        });

        document.getElementById("textNextPage").addEventListener("click", function(){
            if(textCurrentPage < Math.ceil(savePosts.length / itemsPerPage)) {
                textCurrentPage++;
                displayPosts(textCurrentPage); //다음  페이지로 이동하고 게시물 표시
            }
        });

        displayPosts(textCurrentPage);
    

        function pwmsg(){
            var pwCheck = document.getElementById("password");
            var msg = "영문자 대/소문자, 특수문자, 숫자를 포함한 8 ~ 32 자";
            document.getElementById("pm").textContent = msg;
        };