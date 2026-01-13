import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Thymeleaf = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/ViewsAndStatic/Thymeleaf';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Thymeleaf" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Thymeleaf;
