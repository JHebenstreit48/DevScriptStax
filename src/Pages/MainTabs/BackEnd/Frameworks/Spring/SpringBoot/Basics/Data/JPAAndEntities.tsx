import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JPAAndEntities = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/Data/JPAAndEntities';

  return (
    <>
      <PageLayout>
        <PageTitle title="JPA & Entities" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JPAAndEntities;
