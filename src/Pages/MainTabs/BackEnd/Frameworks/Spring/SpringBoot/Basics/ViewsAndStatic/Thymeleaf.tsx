import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
