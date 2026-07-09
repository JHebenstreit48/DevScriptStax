import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Thymeleaf = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/ViewsAndStatic/Thymeleaf';

  return (
    <>
      <PageLayout>
        <PageTitle title="Thymeleaf" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Thymeleaf;
